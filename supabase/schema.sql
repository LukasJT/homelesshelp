-- HomelessHelp Supabase schema
-- Run this in the Supabase SQL editor when setting up the project.

create extension if not exists "uuid-ossp";

create table if not exists public.shelters (
  id text primary key,
  name text not null,
  address text not null,
  city text not null,
  region text not null,
  country text not null check (country in ('US', 'CA')),
  lat double precision not null,
  lng double precision not null,
  phone text,
  website text,
  populations_served text[] not null default '{}',
  services text[] not null default '{}',
  hours text,
  notes text,
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists shelters_lat_lng_idx on public.shelters (lat, lng);
create index if not exists shelters_country_region_idx on public.shelters (country, region);

create table if not exists public.shelter_submissions (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  address text not null,
  city text not null,
  region text not null,
  country text not null check (country in ('US', 'CA')),
  phone text,
  website text,
  populations_served text[] not null default '{}',
  services text[] not null default '{}',
  hours text,
  notes text,
  submitted_by_email text,
  ip_hash text,
  status text not null default 'pending' check (status in ('pending','approved','rejected','duplicate')),
  reviewer_notes text,
  created_at timestamptz not null default now()
);

create index if not exists shelter_submissions_status_idx on public.shelter_submissions (status, created_at desc);

-- Row level security: anonymous users can read shelters and insert submissions, but cannot read other people's submissions or write to shelters.
alter table public.shelters enable row level security;
alter table public.shelter_submissions enable row level security;

create policy "shelters readable by anyone"
  on public.shelters for select using (true);

create policy "submissions insertable by anyone"
  on public.shelter_submissions for insert with check (true);
