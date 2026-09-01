-- ====================================================================
-- SUPABASE POSTGRESQL TABLE & ROW LEVEL SECURITY SETUP (100% FREE TIER)
-- ====================================================================
-- Instructions:
-- 1. Create a free Supabase project at https://supabase.com
-- 2. Go to "SQL Editor" in the left sidebar
-- 3. Paste this entire script and click "Run"
-- 4. Go to Project Settings -> API to copy your Project URL and anon public key!
-- ====================================================================

-- 1. Create the student_surveys table
CREATE TABLE IF NOT EXISTS public.student_surveys (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    roll_no TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    gender TEXT,
    dob DATE,
    degree TEXT,
    department TEXT NOT NULL,
    year TEXT NOT NULL,
    semester TEXT,
    section TEXT,
    cgpa NUMERIC(4,2),
    course_rating INTEGER CHECK (course_rating >= 1 AND course_rating <= 5),
    facilities_rating INTEGER CHECK (facilities_rating >= 1 AND facilities_rating <= 5),
    interests TEXT[],
    placement_assistance TEXT,
    extracurriculars TEXT,
    feedback TEXT
);

-- 2. Create index on frequently searched and filtered columns
CREATE INDEX IF NOT EXISTS idx_surveys_dept ON public.student_surveys(department);
CREATE INDEX IF NOT EXISTS idx_surveys_year ON public.student_surveys(year);
CREATE INDEX IF NOT EXISTS idx_surveys_roll_no ON public.student_surveys(roll_no);
CREATE INDEX IF NOT EXISTS idx_surveys_created_at ON public.student_surveys(created_at DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.student_surveys ENABLE ROW LEVEL SECURITY;

-- 4. Allow anyone (public students) to insert new survey responses
CREATE POLICY "Allow public survey submissions" 
ON public.student_surveys 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- 5. Allow reading responses (for admin portal)
CREATE POLICY "Allow reading survey responses" 
ON public.student_surveys 
FOR SELECT 
TO anon, authenticated 
USING (true);

-- 6. Allow deleting responses (for admin portal)
CREATE POLICY "Allow deleting survey responses" 
ON public.student_surveys 
FOR DELETE 
TO anon, authenticated 
USING (true);
