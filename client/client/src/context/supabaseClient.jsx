import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zcybxznqgowuwtzbrxop.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjeWJ4em5xZ293dXd0emJyeG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMDk1NTIsImV4cCI6MjA3NzY4NTU1Mn0.-xeIGdMPn1qPVxUK5cfjKINa39HKb8EskspX8_1tCVs'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
