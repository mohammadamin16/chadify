// URL : https://app.snapp.taxi/api/api-base/v2/passenger/config
// method : POST
//
// example request

export interface RequestGetConfig {
  locale: string;
  device_type: number;
  version_code: number;
  os_version: string;
  device_name: string;
  referrer: number;
}

export interface UserConfig {
  ack_url?: string;
  ap_wallet_content?: string;
  app_data?: {
    latest?: number;
    supported?: number;
    update_uri?: string;
  };
  arriving_eta?: {
    is_enabled?: boolean;
    reload_interval?: number;
  };
  call_center_number?: string;
  call_center_number_biker?: string;
  campaigns?: {
    [key: string]: boolean;
  };
  captcha_type?: string;
  cedar_map_data?: {
    client_id?: string;
    client_secret?: string;
    key?: string;
    map_id?: string;
    uri?: string;
  };
  client?: {
    min_sw_version?: number;
  };
  corporate_enrollment_page_url?: string;
  credit_wallet_info?: {
    eligible?: boolean;
    open_in_browser_url?: string;
    pwa_back_url?: string;
    pwa_redirect_url?: string;
    registered?: boolean;
    wallet_id?: number;
  };
  currency?: {
    symbol?: string;
    text?: string;
  };
  direct_debit_info?: {
    debit_id?: string;
    open_in_browser_url?: string;
    pwa_back_url?: string;
    pwa_redirect_url?: string;
    registered?: boolean;
  };
  driver_location_fallback_timeout?: number;
  dynamic_icons_sprite_url?: string;
  event_interval?: string;
  favorite_places?: {
    id?: number;
    name?: string;
    location?: {
      lat?: number;
      lng?: number;
      formatted_address?: string;
    };
    detailed_address?: string;
    map_url?: string;
  }[];
  google_map_api_key?: string;
  google_places_api_key?: string;
  heliograph?: {
    ack_timeout?: number;
    disconnect_timeout?: number;
    ice_servers?: {
      url?: string;
      type?: string;
      username?: string;
      password?: string;
    }[];
    in_call_timeout?: number;
    ringing_timeout?: number;
  };
  hurry_delay?: number;
  in_app_call?: boolean;
  is_ap_enabled?: boolean;
  is_online_payment_enabled?: boolean;
  jek_enabled_version?: number;
  live_preview_interval?: number;
  location_interval?: number;
  map?: {
    routing?: {
      endpoint?: string;
      key?: string;
    };
    search?: {
      endpoint?: string;
      key?: string;
    };
    pre_ride_log?: {
      endpoint?: string;
      key?: string;
    };
    reverse?: {
      endpoint?: string;
      key?: string;
    };
    statictile_endpoint?: string;
    pickup_suggestion_radius?: number;
    car_dynamic_icon_size?: number;
  };
  map_core_url_pwa?: string;
  map_feedback_endpoint?: string;
  map_feedback_url?: string;
  map_search_config_url?: string;
  map_type?: number;
  mapbox_style_url?: string;
  mapbox_token?: string;
  need_adjust_notify_first_ride?: boolean;
  payment_texts?: {
    ap_wallet_content?: string;
    ap_wallet_link?: string;
    ap_wallet_title?: string;
    direct_debit_title?: string;
    online_payment_title?: string;
    snapp_card_title?: string;
  };
  pending?: boolean;
  pin?: {
    cache_geohash_characters?: number;
    cache_reverse_geocode_ttl?: number;
    cache_vehicles_ttl?: number;
    delay_in_request?: number;
  };
  profile?: {
    acquisition_chanel?: null;
    adjust_fingerprint?: string;
    cellphone?: string;
    comapny_id?: number;
    credit?: number;
    email?: string;
    email_verified?: number;
    fullname?: string;
    has_message?: boolean;
    locale?: string;
    meta?: {
      adjust_first_ride?: string;
      ap_authenticated?: string;
      credit_wallet_id?: string;
      loyalty_id?: string;
      webengage_id?: string;
    };
    need_fingerprint?: boolean;
    phone?: string;
    photo_url?: string;
    referral_code?: string;
    registration_source?: number;
    total_distance?: number;
    total_duration?: number;
    user_id?: number;
  };
  profiling?: {
    delete_account?: boolean;
    force_logout?: boolean;
  };
  pusher?: {
    app_key?: string;
    auth_url?: string;
    channel?: string;
    cluster?: string;
  };
  rating_reasons_checksum?: number;
  referral?: {
    action_button_text?: string;
    text_to_share?: string;
    title_text?: string;
  };
  referral_base_url?: string;
  referral_intro_text?: string;
  referral_shareable_text?: string;
  retry_with_higher_price?: boolean;
  ride_message?: string[];
  rtc?: {
    channels?: {
      [key: string]: string;
    };
    clean_session?: boolean;
    host?: string;
    ping_intval?: number;
    polling_enabled?: boolean;
    port?: string;
    protocol?: string;
    qos?: number;
    timeout?: number;
    tls?: boolean;
    topics?: {
      [key: string]: {
        interval?: number;
        name?: string;
        qos?: number;
      };
    };
  };
  safety_center?: {
    educational_content_screen_url?: string;
    sos_phone_number?: string;
  };
  safety_info?: {
    id?: null;
    status?: null;
    observant?: null;
  };
  show_ride_scheduling_rules?: boolean;
  skippable_rating?: boolean;
  smooth_movement_buffersize?: number;
  smooth_movement_timeextender?: number;
  smooth_movement_timeout?: number;
  snapp_card?: {
    is_enabled?: boolean;
  };
  snappgroup_content_date?: number;
  started_ride?: {
    ride_info?: {
      ride_id?: string;
      current_state?: number;
      name?: string;
      cellphone?: string;
      service_type?: number;
      is_delivery?: boolean;
      sub_service_type?: null;
      final_price?: number;
      can_use_ride_voucher?: boolean;
      start_time?: string;
      shareurl?: string;
      payment_type?: number;
      origin?: {
        lat?: number;
        lng?: number;
        formatted_address?: string;
        details?: string;
      };
      destination?: {
        lat?: number;
        lng?: number;
        formatted_address?: string;
        details?: string;
      };
    };
    ride_time?: number;
    source?: number;
    ride_state?: number;
  };
  support_screen_url?: string;
  terms_conditions?: string;
  user_feedback_config?: {
    app_rate_time?: number;
    fb_chat_url?: string;
    feedback_survey_url?: string;
    ignore_survey?: boolean;
    show_app_rate_dialog?: boolean;
  };
  user_version?: string;
  vehicle_type?: {
    bike?: {
      [key: string]: {
        base_price?: number;
        currency?: string;
        minimum_price?: number;
        price_per_distance?: number;
        price_per_time?: number;
        service_fee?: number;
        tax_rate?: number;
      };
    };
    car?: {
      [key: string]: {
        base_price?: number;
        currency?: string;
        minimum_price?: number;
        price_per_distance?: number;
        price_per_time?: number;
        service_fee?: number;
        tax_rate?: number;
      };
    };
  };
  vehicle_types?: string[];
  voucher_texts?: {
    rides_left?: string;
    terms_conditions?: string;
    title?: string;
  };
}
//const exampleRequest = {
//  locale: "fa-IR",
//  device_type: 6,
//  version_code: 2,
//  os_version: "Android",
//  device_name: "Chrome",
//  referrer: 0,
//};
//const exampleResponse = {
//  ack_url:
//    "https://ackerman.apps.public.okd4.teh-2.snappcloud.io/v1/acknowledgments",
//  ap_wallet_content:
//    "با فعال‌سازی کیف پول آپ، می‌توانید از موجودی آن برای پرداخت اسنپ!، خرید شارژ، سفارش غذا، رزرو هتل و … استفاده کنید.",
//  app_data: {
//    latest: 0,
//    supported: 0,
//    update_uri: "",
//  },
//  arriving_eta: {
//    is_enabled: false,
//    reload_interval: 180,
//  },
//  call_center_number: "02141849000",
//  call_center_number_biker: "02196642",
//  campaigns: {
//    ap_wallet_android: true,
//    ap_wallet_ios: true,
//    ap_wallet_web: true,
//    banning_disabled: false,
//    black_gate: true,
//    box_change_payment_after_boarded: false,
//    cash_adjust_by_driver: false,
//    change_destination: true,
//    chat: true,
//    "citadel.passenger.device": true,
//    "citadel.passenger.remove.base": true,
//    "client.all.snapp.testing.feature": true,
//    "client.cancellation.headsup": true,
//    "client.cancellationreason.accepted": true,
//    "client.cancellationreason.beforeaccept": true,
//    "client.chronos.schedule": true,
//    "client.guardian.callems": true,
//    "client.guardian.callsupport": true,
//    "client.guardian.safetycenter": true,
//    "client.guardian.silentsos": true,
//    "client.indebtpayment.menu": true,
//    "client.indebtpayment.modals": true,
//    "client.map.disablerastertile": true,
//    "client.map.feedback": true,
//    "client.map.mapfeedback": true,
//    "client.map.tilenozoomlimit": true,
//    "client.passenger.frequentlogging.enabled": true,
//    "client.passenger.game": true,
//    "client.passenger.push": true,
//    "client.passenger.serviceworker": true,
//    "client.passenger.sm.enabled": true,
//    "client.passenger.sm.showpath": true,
//    "client.profiling.deleteaccount": true,
//    "client.profiling.forcelogout": true,
//    "client.rideexperience.reorder": true,
//    "client.rideinhurry.option": true,
//    "client.rideinhurry.waitingpage": true,
//    "client.support.boxcc": true,
//    "client.support.cabcc": true,
//    "client.support.ccbutton": true,
//    "client.support.faq": true,
//    "client.support.searchbox": true,
//    corporate_wallet: true,
//    credit_wallet_payment: false,
//    desired_destination: true,
//    direct_debit_payment: true,
//    driver_app_beta_version: false,
//    driver_instant_cash_out: true,
//    emq: false,
//    fake_app: false,
//    fake_driver_apps: false,
//    force_update_driver: false,
//    ginger: true,
//    "gossiper.locationstreaming.d2p": true,
//    ios_new_app: false,
//    ios_stage_rollout: true,
//    "is.pwa": true,
//    jeeb_driver_ipg: false,
//    jeeb_in_ride_payment: false,
//    jeeb_passenger_ipg: false,
//    jibit_instant_cash_out: true,
//    live_location: false,
//    map: true,
//    new_golchin: false,
//    passenger_secondary_location_interval: false,
//    payment_web_redirect: false,
//    push: true,
//    reallotment: true,
//    "report.message.passenger": true,
//    "retention.promotioncenter.foodreward": true,
//    "retention.promotioncenter.foodvoucher": true,
//    ride_for_friend: true,
//    sattar: true,
//    secondary_go_offline: false,
//    "smapp.search.dynamic.icon": true,
//    "smart.reply.passenger": true,
//    "swear.word.passenger": true,
//    testtesttt: true,
//    toman_instant_cashout_with_money: true,
//    user_compound_voucher: true,
//    user_discount: true,
//    user_reward: true,
//    xu_xh_block: false,
//    xu_xh_block_city: false,
//    xu_xh_validation: true,
//  },
//  captcha_type: "none",
//  cedar_map_data: {
//    client_id: "snapp-15242641026894969453",
//    client_secret: "aBXSlnNuYXBwlhd0JV09T4ySKvUelB-NwHVYz1rJtB7-qTcCGscfB3g=",
//    key: "0b72659ec2cfefd0f4635b6286929299aa8020ae",
//    map_id: "cedarmaps.streets",
//    uri: "http://snapp.api.cedarmaps.com/v1",
//  },
//  client: {
//    min_sw_version: 1,
//  },
//  corporate_enrollment_page_url:
//    "https://business.snapp.ir/?utm_source=jek&utm_medium=slider-native&utm_campaign=corporate-july22&utm_content=fixedbannerpwa",
//  credit_wallet_info: {
//    eligible: false,
//    open_in_browser_url: "openinbrowser://",
//    pwa_back_url: "snpjekhomepage://",
//    pwa_redirect_url: "https://pl.snapp.ir",
//    registered: false,
//    wallet_id: 0,
//  },
//  currency: {
//    symbol: "﷼ً",
//    text: "ریال",
//  },
//  direct_debit_info: {
//    debit_id: "",
//    open_in_browser_url: "openinbrowser://",
//    pwa_back_url: "snpjekhomepage://",
//    pwa_redirect_url: "https://direct-debit.snapp.ir",
//    registered: false,
//  },
//  driver_location_fallback_timeout: 10,
//  dynamic_icons_sprite_url: "https://web-cdn.snapp.ir/smapp/cars/pwa.png",
//  event_interval: "20",
//  favorite_places: [],
//  google_map_api_key: "AIzaSyBhjiLmGU3pVYSU_8Um-o6y78CqUSQxRlg",
//  google_places_api_key: "AIzaSyDbT4g6DgEFKyhSvSBd3o_ECyMMsHh7T00",
//  heliograph: {
//    ack_timeout: 10000,
//    disconnect_timeout: 7000,
//    ice_servers: [
//      {
//        url: "turn.snapp.site",
//        type: "turn",
//        username: "Username",
//        password: "Password",
//      },
//      {
//        url: "stun.l.google.com:19302",
//        type: "stun",
//        username: "",
//        password: "",
//      },
//    ],
//    in_call_timeout: 300000,
//    ringing_timeout: 56000,
//  },
//  hurry_delay: 0,
//  in_app_call: false,
//  is_ap_enabled: false,
//  is_online_payment_enabled: true,
//  jek_enabled_version: 4,
//  live_preview_interval: 10,
//  location_interval: 5,
//  map: {
//    routing: {
//      endpoint:
//        "https://api.teh-1.snappmaps.ir/client-route/v1/mapbox/driving-traffic/",
//      key: "e734d9fb9d1dc400bbafaedb8afa3dba",
//    },
//    search: {
//      endpoint: "https://api.teh-1.snappmaps.ir/client-search/v1/",
//      key: "e734d9fb9d1dc400bbafaedb8afa3dba",
//    },
//    pre_ride_log: {
//      endpoint: "https://api.teh-1.snappmaps.ir/address-analytics/v1",
//      key: "e734d9fb9d1dc400bbafaedb8afa3dba",
//    },
//    reverse: {
//      endpoint: "https://api.teh-1.snappmaps.ir/client-reverse/v1",
//      key: "",
//    },
//    statictile_endpoint: "https://smappshot.snappmaps.ir",
//    pickup_suggestion_radius: 8,
//    car_dynamic_icon_size: 1,
//  },
//  map_core_url_pwa: "https://web-cdn.snapp.ir/smapp/core-pwa-icons/",
//  map_feedback_endpoint: "https://app.snapp.taxi/map-feedback",
//  map_feedback_url: "https://mapfeedback.snapp.ir",
//  map_search_config_url:
//    "https://web-cdn.snapp.ir/smapp/search/icons-config.json",
//  map_type: 2,
//  mapbox_style_url: "https://tile.snappmaps.ir/styles/snapp-style/style.json",
//  mapbox_token:
//    "pk.eyJ1IjoicmFzaGVkbmFkZXIiLCJhIjoiY2p2a2xwZG14MGMycDQzbzQ3M2dwajhndCJ9.wJibw1I1rTVSEpTOQBx1GQ",
//  need_adjust_notify_first_ride: false,
//  payment_texts: {
//    ap_wallet_content:
//      "با فعال‌سازی کیف پول آپ، می‌توانید از موجودی آن برای پرداخت اسنپ!، خرید شارژ، سفارش غذا، رزرو هتل و … استفاده کنید.",
//    ap_wallet_link: "https://api.snapp.site/finance/ap-wallet/more-info",
//    ap_wallet_title: "کیف پول",
//    direct_debit_title: "پرداخت مستقیم",
//    online_payment_title: "پرداخت آنلاین",
//    snapp_card_title: "اسنپ کارت",
//  },
//  pending: false,
//  pin: {
//    cache_geohash_characters: 7,
//    cache_reverse_geocode_ttl: 604800,
//    cache_vehicles_ttl: 30,
//    delay_in_request: 700,
//  },
//  profile: {
//    acquisition_chanel: null,
//    adjust_fingerprint: "",
//    cellphone: "+989936337829",
//    comapny_id: 0,
//    credit: 0,
//    email: "",
//    email_verified: -1,
//    fullname: "محمدامین توتونچی",
//    has_message: false,
//    locale: "fa-IR",
//    meta: {
//      signup_origin: "web",
//      webengage_id: "ffffffffffffff00594f385147454c32",
//    },
//    need_fingerprint: true,
//    phone: "",
//    photo_url: "",
//    referral_code: "YO8QGEL2",
//    registration_source: 1,
//    total_distance: 0,
//    total_duration: 0,
//    user_id: 71778485,
//  },
//  profiling: {
//    delete_account: false,
//    force_logout: false,
//  },
//  pusher: {
//    app_key: "thisIsInvalidKey",
//    auth_url: "https://api.snapp.site/v2/passenger/pusher/subscribe",
//    channel: "passenger-c87b666b15e1c9ed0d6c99de5204784f",
//    cluster: "eu",
//  },
//  rating_reasons_checksum: 2818948099,
//  referral: {
//    action_button_text: "اشتراک‌گذاری کد",
//    text_to_share:
//      "سلام دوست جدید اسنپ!\nبا این لینک در اسنپ ثبت‌نام کن و در اولین درخواست خودرو ۱۵٬۰۰۰ تومان تخفیف بگیر. از حالا می‌تونی از خدمات متنوع سوپراپلیکیشن اسنپ مثل سفارش غذا، مشاوره پزشکی، خرید شارژ و بسته اینترنتی و غیره استفاده کنی.\nhttps://snapp.taxi/passenger/YO8QGEL2",
//    title_text: "با دعوت از دوستانتان به اسنپ، سفر بعدی را ﻣﻬﻤﺎن ﻣﺎ ﺑﺎﺷﯿﺪ!",
//  },
//  referral_base_url: "https://snapp.taxi/passenger/",
//  referral_intro_text:
//    "لینک دعوت یا کد معرفی خود را برای دوستانتان ارسال کنید تا اولین سفرشان را تا سقف ۱۵٬۰۰۰ تومان مهمان اسنپ باشند و شما نیز بعد از پایان اولین سفرشان به تعداد افراد معرفی شده، سفرهای رایگان ۱۵٬۰۰۰ تومانی کسب کنید. ",
//  referral_shareable_text:
//    "سلام دوست جدید اسنپ!\nبا این لینک در اسنپ ثبت‌نام کن و در اولین درخواست خودرو ۱۵٬۰۰۰ تومان تخفیف بگیر. از حالا می‌تونی از خدمات متنوع سوپراپلیکیشن اسنپ مثل سفارش غذا، مشاوره پزشکی، خرید شارژ و بسته اینترنتی و غیره استفاده کنی.\n",
//  retry_with_higher_price: false,
//  ride_message: [
//    "الآن می‌آیم",
//    "تا پنج دقیقه دیگر می‌آیم",
//    "لطفاً با من تماس بگیرید",
//  ],
//  rtc: {
//    channels: {
//      events: "passenger-event-983325f825ccb4fe298bdf11c1474196",
//    },
//    clean_session: true,
//    host: "sns.snapp.ir",
//    ping_intval: 120,
//    polling_enabled: false,
//    port: "443",
//    protocol: "wss",
//    qos: 0,
//    timeout: 30,
//    tls: true,
//    topics: {
//      chat: {
//        interval: 0,
//        name: "snapp/passenger/4xM12XEwxNRjQa3/chat",
//        qos: 0,
//      },
//      driver_location: {
//        interval: 0,
//        name: "snapp/passenger/4xM12XEwxNRjQa3/driver-location",
//        qos: 0,
//      },
//      events: {
//        interval: 0,
//        name: "passenger-event-983325f825ccb4fe298bdf11c1474196",
//        qos: 0,
//      },
//      heliograph_general_topic: {
//        interval: 0,
//        name: "shared/snapp/passenger/4xM12XEwxNRjQa3/call/send",
//        qos: 1,
//      },
//      heliograph_receive_topic: {
//        interval: 0,
//        name: "snapp/passenger/4xM12XEwxNRjQa3/call/receive",
//        qos: 1,
//      },
//      location: {
//        interval: 4,
//        name: "snapp/passenger/4xM12XEwxNRjQa3/location",
//        qos: 1,
//      },
//      superapp: {
//        interval: 0,
//        name: "snapp/passenger/4xM12XEwxNRjQa3/superapp",
//        qos: 0,
//      },
//    },
//  },
//  safety_center: {
//    educational_content_screen_url: "https://app.snapp.taxi/safety/info",
//    sos_phone_number: "02141849110",
//  },
//  show_ride_scheduling_rules: true,
//  skippable_rating: true,
//  smooth_movement_buffersize: 0,
//  smooth_movement_timeextender: 5,
//  smooth_movement_timeout: 0,
//  snapp_card: {
//    is_enabled: true,
//  },
//  snappgroup_content_date: 1709021604,
//  subscriptions: {
//    pro: {
//      description: "",
//      expiration_date: -62135596800,
//      is_pro: false,
//      onboarding: false,
//      status: 2,
//    },
//  },
//  superapp: {
//    hod_hod_ping_interval: 180,
//  },
//  supported_locales: ["fa", "en", "fr"],
//  sync_interval: 48,
//  time: {
//    current: "2024-02-27T11:43:24+03:30",
//  },
//  update: null,
//  update_message: [],
//  ussd: {
//    is_enabled: false,
//    is_jiring_enabled: false,
//    mci_text: "َ*733#",
//    none_mci_text: "*733#",
//    pattern: "*733*4*76277*[-AMT-]#",
//    ussd_text: "USSD",
//  },
//  waiting_gif: "https://downloads.snapp.site/waitings/General-Android.gif",
//  waiting_gif_checksum: "",
//  waiting_package_gif:
//    "https://downloads.snapp.site/waitings/General-Android.gif",
//  waiting_tips: [
//    {
//      title: "",
//      desc: "پیش از سوار شدن یا تحویل مرسوله، پلاک خودرو یا موتور و چهره کاربر راننده را با اطلاعات ثبت‌شده در اپلیکیشن تطبیق دهید. در صورت مطابقت نداشتن، سفر را لغو کنید و به پشتیبانی اطلاع دهید.",
//    },
//    {
//      title: "",
//      desc: "جابه‌جایی بار فقط از طریق سرویس باکس مجاز است. اسنپ ارسال مرسوله را از طریق سرویس مسافر تایید نمی‌کند. بارهای با ارزش بیش از ۵میلیون تومان را با اسنپ‌باکس جابه‌جا نکنید.",
//    },
//    {
//      title: "",
//      desc: "اسنپ تایید صلاحیت کاربران راننده‌ی خود را به پلیس اماکن فراجا سپرده‌ است و تمام رانندگان اسنپ پیش از شروع فعالیت توسط پلیس تایید صلاحیت می‌شوند.",
//    },
//    {
//      title: "",
//      desc: "درصورت بروز موارد اضطراری در سفر از سرویس امنیت سفر(سپر آبی رنگ روی اپلیکیشن پس از آغاز سفر) استفاده کنید و از هرگونه مداخله شخصی بپرهیزید.",
//    },
//    {
//      title: "",
//      desc: "با فعال کردن «تماس امن» از قسمت تنظیمات حساب کاربری، می‌توانید شماره‌ی تماس خود را از دید کاربر راننده پنهان کنید.",
//    },
//  ],
//  webengage_id: "ffffffffffffff00594f385147454c32",
//};
