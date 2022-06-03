import { createClient } from '@supabase/supabase-js';
import constants from '../constants';

// TODO: Match scratch with MySQL? Could be dangerous because XSS attacks.
const db = createClient(constants.SUPABASE_URL, constants.SUPABASE_KEY);

export { db as client }