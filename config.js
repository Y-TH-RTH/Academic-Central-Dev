/* =====================================================================
   Academic Central settings. This is the only file a school needs to edit.
   ===================================================================== */
const APP_CONFIG = {
  nameFirst: 'Academic',
  nameSecond: 'Central',
  tagline: 'Tutoring & Academic Support',

  // From your Supabase project: Project Settings > API
  supabaseUrl: 'https://azpfbdizrkbaqoanhzvh.supabase.co/rest/v1/',
  supabaseAnonKey: 'sb_publishable_bfT2qTfUixZ7k3XqCKpPQw_R80BGqzP',

  // Teachers shown in the drop-down lists
  teachers: [
    'Adams', 'Baker', 'Chen', 'Diaz', 'Evans', 'Foster',
    'Garcia', 'Hughes', 'Ito', 'Jensen', 'Khan', 'Lopez'
  ],

  // Subjects, grouped for the search lists
  classGroups: {
    'Math': ['Pre-Algebra', 'Algebra 1', 'Algebra 2', 'Geometry', 'Precalculus', 'Calculus', 'Statistics'],
    'English': ['English 7', 'English 8', 'English 9', 'English 10', 'English 11', 'English 12', 'Journalism'],
    'Science': ['Life Science', 'Physical Science', 'Biology', 'Chemistry', 'Physics', 'Environmental Science'],
    'Computer Science': ['Intro to Computer Science', 'Web Design', 'Programming 1', 'Programming 2'],
    'Social Studies': ['World History', 'US History', 'Civics', 'Economics', 'Psychology'],
    'World Languages': ['Spanish 1', 'Spanish 2', 'Spanish 3', 'French 1', 'French 2'],
    'Arts and Health': ['Art 1', 'Art 2', 'Theatre', 'Health', 'Physical Education']
  },

  // Demo mode: shows sample sign-ins on the home page and hides Change Password
  // so visitors cannot lock each other out. Set enabled to false for a real school.
  demo: {
    enabled: true,
    accounts: [
      { role: 'Head Admin', username: 'demo.headadmin', password: 'AcademicDemo1' },
      { role: 'Admin', username: 'demo.admin', password: 'AcademicDemo1' },
      { role: 'Tutor (President)', username: 'demo.tutor', password: 'AcademicDemo1' },
      { role: 'Parent', username: 'demo.parent', password: 'AcademicDemo1' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-brand="first"]').forEach(function (e) { e.textContent = APP_CONFIG.nameFirst; });
  document.querySelectorAll('[data-brand="second"]').forEach(function (e) { e.textContent = APP_CONFIG.nameSecond; });
  document.querySelectorAll('[data-brand="tagline"]').forEach(function (e) { e.textContent = APP_CONFIG.tagline; });
  document.title = document.title.replace(/ · .*$/, '') + ' · ' + APP_CONFIG.nameFirst + ' ' + APP_CONFIG.nameSecond;
  if (APP_CONFIG.demo.enabled) {   // in the demo, nobody can change the shared passwords
    var b = document.getElementById('pw-btn');
    if (b) b.remove();
  }
});
