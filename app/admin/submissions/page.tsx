import { cookies } from "next/headers";
import { getServiceClient, SUPABASE_CONFIGURED } from "@/lib/supabase";
import { ModerationList } from "./ModerationList";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Submissions moderation",
  robots: { index: false, follow: false },
};

function isAuthorized(secret: string | undefined): boolean {
  const expected = process.env.ADMIN_SECRET;
  if (!expected) return false;
  if (!secret) return false;
  return secret === expected;
}

interface Search {
  searchParams: { key?: string };
}

export default async function AdminSubmissions({ searchParams }: Search) {
  const cookieKey = cookies().get("hh_admin")?.value;
  const queryKey = searchParams.key;

  // Auth: cookie OR ?key=... in URL
  const authed = isAuthorized(cookieKey) || isAuthorized(queryKey);

  if (!process.env.ADMIN_SECRET) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-ink">Admin not configured</h1>
        <p className="mt-2 text-ink-soft">
          Set the <code className="rounded bg-paper px-1">ADMIN_SECRET</code> env var in Vercel to
          enable the admin panel, then visit{" "}
          <code className="rounded bg-paper px-1">/admin/submissions?key=YOUR_SECRET</code>.
        </p>
      </section>
    );
  }

  if (!authed) {
    return (
      <section className="mx-auto max-w-md px-4 py-10">
        <h1 className="text-2xl font-bold text-ink">Admin sign-in</h1>
        <p className="mt-2 text-ink-soft">
          Pass <code>?key=ADMIN_SECRET</code> in the URL once; we'll set a cookie. Or paste the
          secret below.
        </p>
        <form method="GET" className="mt-4 flex gap-2">
          <input
            type="password"
            name="key"
            required
            placeholder="Admin secret"
            className="flex-1 rounded-md border border-ink-muted/30 px-3 py-2 text-sm"
          />
          <button type="submit" className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white">
            Enter
          </button>
        </form>
      </section>
    );
  }

  // Set cookie if user just authed via query (effect side-channel)
  // (Setting cookie from server component is limited; we do it via a one-time redirect script.)

  if (!SUPABASE_CONFIGURED) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-ink">Supabase not configured</h1>
        <p className="mt-2 text-ink-soft">
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and
          <code>SUPABASE_SERVICE_ROLE_KEY</code> in Vercel to read submissions.
        </p>
      </section>
    );
  }

  const sb = getServiceClient();
  if (!sb) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-ink">Server misconfigured</h1>
      </section>
    );
  }

  const { data, error } = await sb
    .from("shelter_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-ink">Error loading submissions</h1>
        <p className="mt-2 text-sm text-danger">{error.message}</p>
      </section>
    );
  }

  // Pass the secret to the client so it can call the moderation API.
  const adminKey = (queryKey || cookieKey) as string;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <header className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink">Submission moderation</h1>
          <p className="mt-1 text-sm text-ink-muted">
            {data?.length ?? 0} submissions in queue (newest first).
          </p>
        </div>
        <a
          href={`/admin/submissions?key=${encodeURIComponent(adminKey)}`}
          className="text-xs text-brand underline"
        >
          Bookmark this URL
        </a>
      </header>

      <ModerationList submissions={data ?? []} adminKey={adminKey} />
    </section>
  );
}
