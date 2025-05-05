// aboutUsPage/locators.js
export const locators = {
    // Navigation menu
    restorationAreasDropdown: '#navbarSupportedContent > div.py-3.py-md-0.navbar--nav > ul > li:nth-child(4) > button',
    howWeRestoreDropdown: '#navbarSupportedContent > div.py-3.py-md-0.navbar--nav > ul > li:nth-child(3) > button',
    damageAssessmentDropdown: 'body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > button:nth-child(2)',
    
    // Menu Elements
    DamageAssessment_item: ':nth-child(3) > .dropdown-menu > :nth-child(1) > .dropdown-item',
    Planning_item: ':nth-child(3) > .dropdown-menu > :nth-child(2) > .dropdown-item',
    EnvironmentalCompliance_item: ':nth-child(3) > .dropdown-menu > :nth-child(3) > .dropdown-item',
    StrategicFrameworks_item: ':nth-child(3) > .dropdown-menu > :nth-child(4) > .dropdown-item',
    MonitoringAndAdaptiveManagement_item: '#navbarSupportedContent a[href*="monitoring-and-adaptive-management"]',
    ReviewingRestorationProgress_item: '#navbarSupportedContent a[href*="reviewing-restoration-progress"]',
    
    // Important Links
    PrivacyInformation_item: '.footer a[href*="privacy-policy"]',
    CopyrightInformation_item: '.footer a[href*="copyright"]',
    Disclaimer_item: '.footer a[href*="disclaimer"]',
    ContactUs_item: '.footer a[href*="contact-us"]',
    DocumentAccessibility_item: '.footer a[href*="accessibility"]',

    // Stay Connected Block
    socialMediaBlock: '.nav.navbar-nav',
    NOAAIcon: 'a[href*="noaa.gov"]',
    RSSIcon: 'a[href="/rss.xml"]',
    ContactUs: '.footer a[href*="contact-us"]',

    // NOAA Offices
    OfficeOfResponseAndRestoration_item: 'a[href*="response.restoration.noaa.gov"]',
    OfficeOfHabitatConservation_item: 'a[href*="habitat.noaa.gov/storymap"]',

    // Dropdown Elements Restoration Areas
    Alabama_item: ':nth-child(4) > .dropdown-menu > :nth-child(1) > .dropdown-item',
    Florida_item: ':nth-child(4) > .dropdown-menu > :nth-child(2) > .dropdown-item',
    Louisiana_item: ':nth-child(4) > .dropdown-menu > :nth-child(3) > .dropdown-item',
    Mississippi_item: ':nth-child(4) > .dropdown-menu > :nth-child(4) > .dropdown-item',
    Texas_item: ':nth-child(4) > .dropdown-menu > :nth-child(5) > .dropdown-item',
    RegionWide_item: ':nth-child(4) > .dropdown-menu > :nth-child(6) > .dropdown-item',
    OpenOcean_item: ':nth-child(4) > .dropdown-menu > :nth-child(7) > .dropdown-item',

    // Footer elements
    footer: '.footer',
    AboutUs_item: '#block-noaa-gsr-footermenu1 > .nav > :nth-child(3) > .nav-link',
    HowWeRestore_item: '#block-noaa-gsr-footermenu1 > .nav > :nth-child(5) > .nav-link',
    RestorationAreas_item: '#block-noaa-gsr-footermenu1 > .nav > :nth-child(2) > .nav-link',
    Data_item: '#block-noaa-gsr-footermenu1 > .nav > :nth-child(4) > .nav-link',
    MediaAndPress_item: '#block-noaa-gsr-footermenu1 > .nav > :nth-child(6) > .nav-link',
    Home_item: '#block-noaa-gsr-footermenu1 > .nav > :nth-child(1) > .nav-link',

    // Story Archive
    StoryArchive_item: '#navbarSupportedContent a[href*="story-archive"]',
};
  

