import { countryLogo } from '@countryconfig/api/application/country-logo'

export const defaultApplicationConfig = {
  APPLICATION_NAME: 'MEC OpenCRVS',
  BIRTH: {
    REGISTRATION_TARGET: 30,
    LATE_REGISTRATION_TARGET: 365,
    FEE: {
      ON_TIME: 0,
      LATE: 5.5,
      DELAYED: 15
    },
    PRINT_IN_ADVANCE: true
  },
  DEATH: {
    REGISTRATION_TARGET: 45,
    FEE: {
      ON_TIME: 0,
      DELAYED: 0
    },
    PRINT_IN_ADVANCE: true
  },
  MARRIAGE: {
    REGISTRATION_TARGET: 45,
    FEE: {
      ON_TIME: 10,
      DELAYED: 45
    },
    PRINT_IN_ADVANCE: true
  },
  CURRENCY: {
    languagesAndCountry: ['en-US'],
    isoCode: 'USD'
  },
  PHONE_NUMBER_PATTERN: '^0(7|9)[0-9]{8}$',
  NID_NUMBER_PATTERN: '^[0-9]{10}$',
  COUNTRY_LOGO: countryLogo,
  LOGIN_BACKGROUND: {
    backgroundColor: '36304E'
  },
  // Following constants aren't configurable via UI
  MARRIAGE_REGISTRATION: false,
  DATE_OF_BIRTH_UNKNOWN: false,
  INFORMANT_SIGNATURE: false,
  INFORMANT_SIGNATURE_REQUIRED: false,
  EXTERNAL_VALIDATION_WORKQUEUE: false,
  FIELD_AGENT_AUDIT_LOCATIONS: 'DISTRICT',
  DECLARATION_AUDIT_LOCATIONS: 'DISTRICT',
  USER_NOTIFICATION_DELIVERY_METHOD: 'email', // or 'sms', or '' ... You can use 'sms' for WhatsApp
  INFORMANT_NOTIFICATION_DELIVERY_METHOD: 'email', // or 'sms', or '' ... You can use 'sms' for WhatsApp
  SIGNATURE_REQUIRED_FOR_ROLES: ['LOCAL_REGISTRAR', 'NATIONAL_REGISTRAR']
}

export const COUNTRY_WIDE_CRUDE_DEATH_RATE = 10
