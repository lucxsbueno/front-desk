const messages = [
  {
    id: 1,
    user_id: 0,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.",
    timestamp: "11:23",
    is_read: true
  },
  {
    id: 2,
    user_id: 0,
    type: "image",
    body: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
    timestamp: "11:34",
    is_read: true
  },
  {
    id: 3,
    user_id: 0,
    type: "video",
    body: {
      srcUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      title: "what_car_can_you_get_for_a_grand.mp4",
    },
    timestamp: "12:31",
    is_read: true
  },
  {
    id: 4,
    user_id: 0,
    type: "document",
    body: {
      type: "pdf",
      title: "certificado-startup-summit-2022.pdf",
      srcUrl: "https://www.africau.edu/images/default/sample.pdf",
    },
    timestamp: "13:32",
    is_read: true
  },
  {
    id: 5,
    user_id: 0,
    type: "audio",
    body: require("../../../../utils/audio/1-audio.mp3"),
    timestamp: "14:32",
    is_read: true
  },
  {
    id: 6,
    user_id: 0,
    type: "sticker",
    body: "Lorem ipsum dolor sit amet",
    timestamp: "15:32",
    is_read: true
  },
  {
    id: 7,
    user_id: 34,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque. Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.",
    timestamp: "16:32",
    is_read: true
  },
  {
    id: 8,
    user_id: 34,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur.",
    timestamp: "17:32",
    is_read: true
  },
  {
    id: 9,
    user_id: 0,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.",
    timestamp: "18:32",
    is_read: true
  },
  {
    id: 10,
    user_id: 0,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque. Praesent diam ante, scelerisque. Praesent diam ante, scelerisque",
    timestamp: "19:32",
    is_read: true
  },
  {
    id: 11,
    user_id: 0,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque",
    timestamp: "20:32",
    is_read: true
  },
  {
    id: 12,
    user_id: 0,
    type: "text",
    body: "Lorem ipsum dolor sit amet, consectetur.",
    timestamp: "21:32",
    is_read: true
  },
  {
    id: 13,
    user_id: 0,
    type: "video",
    body: {
      srcUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      title: "for_bigger_meltdowns.mp4",
    },
    timestamp: "22:32",
    is_read: true
  },
  {
    id: 14,
    user_id: 34,
    type: "video",
    body: {
      srcUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "bigger_joyrides.mp4",
    },
    timestamp: "23:32",
    is_read: true
  },
  {
    id: 15,
    user_id: 34,
    type: "image",
    body: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    is_read: true
  },
  {
    id: 22,
    user_id: 34,
    type: "text",
    body: "Lorem ipsum dolor sit amet. Praesent diam ante, scelerisque. Praesent diam ante, scelerisque",
    timestamp: "00:32",
    is_read: false
  },
  {
    id: 23,
    user_id: 34,
    type: "text",
    body: "Lorem ipsum dolor sit amet. Praesent diam ante, scelerisque",
    timestamp: "01:32",
    is_read: false
  },
];

export default messages;
