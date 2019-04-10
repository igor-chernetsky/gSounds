export const games = [
  {
    id: 0,
    name: 'Mortal Kombat',
    image: require('../../images/mklogo.png')
  },
  {
    id: 1,
    name: 'Quake',
    image: require('../../images/quake_logo.png')
  },
  {
    id: 2,
    name: 'Unreal Tournament',
    image: require('../../images/ut_logo.png')
  },
  {
    id: 3,
    name: 'Warcraft 3',
    image: require('../../images/wc3_logo.jpg')
  },
  {
    id: 4,
    name: 'Counter-Strike',
    image: require('../../images/cs_logo.png')
  },
  {
    id: 5,
    name: 'Starcraft',
    image: require('../../images/sc_logo.png')
  }
]

const sounds = [
  [
    {
      id: 1,
      name: 'Get Over Here!',
      uri: 'mk_scorpion.mp3',
      image: require('../../images/mk/scorpion.gif')
    },
    {
      id: 2,
      name: 'Finish Him!',
      uri: 'mk_finish_him.mp3',
      image: require('../../images/mklogo.png')
    },
    {
      id: 3,
      name: 'Fatality',
      uri: 'mk_fatality.mp3',
      image: require('../../images/mklogo.png')
    }
  ],
  [
    {
      id: 101,
      name: 'Impressive',
      uri: 'q_impressive.mp3',
      image: require('../../images/quake/impressive.png')
    },
    {
      id: 102,
      name: 'Excellent',
      uri: 'q_excellent.mp3',
      image: require('../../images/quake/excellent.jpg')
    },
    {
      id: 103,
      name: 'Fight',
      uri: 'q_fight.mp3',
      image: require('../../images/quake_logo.png')
    },
    {
      id: 104,
      name: 'Perfect',
      uri: 'q_perfect.mp3',
      image: require('../../images/quake_logo.png')
    },
    {
      id: 105,
      name: 'Railgun',
      uri: 'q_railgun.mp3',
      image: require('../../images/quake/railgun.png')
    }
  ],
  [
    {
      id: 201,
      name: 'Megakill',
      uri: 'megakill.wav',
      image: require('../../images/ut_logo.png')
    },
    {
      id: 202,
      name: 'Monsterkill',
      uri: 'monsterkill.wav',
      image: require('../../images/ut_logo.png')
    },
    {
      id: 203,
      name: 'Multikill',
      uri: 'multikill.wav',
      image: require('../../images/ut_logo.png')
    },
    {
      id: 204,
      name: 'Ultrakill',
      uri: 'ultrakill.wav',
      image: require('../../images/ut_logo.png')
    }
  ],
  [
    {
      id: 301,
      name: 'I didn\'t vote for you',
      uri: 'wc3_peasant_vote.wav',
      image: require('../../images/wc3/peasant.jpg')
    },
    {
      id: 302,
      name: 'I\'m dead',
      uri: 'wc3_peasant_dead.wav',
      image: require('../../images/wc3/peasant.jpg')
    },
    {
      id: 303,
      name: 'I bow to your will',
      uri: 'wc3_acolyte_bow.wav',
      image: require('../../images/wc3/acolyte.gif')
    },
    {
      id: 304,
      name: 'My life for Ner\'zhul',
      uri: 'wc3_acolyte_nerzul.wav',
      image: require('../../images/wc3/acolyte.gif')
    },
    {
      id: 305,
      name: 'Hood',
      uri: 'wc3_acolyte_hood.wav',
      image: require('../../images/wc3/acolyte.gif')
    },
    {
      id: 306,
      name: 'OK',
      uri: 'wc3_peon_ok.wav',
      image: require('../../images/wc3/peon.gif')
    },
    {
      id: 307,
      name: 'Ready',
      uri: 'wc3_peon_ready.wav',
      image: require('../../images/wc3/peon.gif')
    },
    {
      id: 308,
      name: 'Work Work!',
      uri: 'wc3_peon_work.wav',
      image: require('../../images/wc3/peon.gif')
    },
    {
      id: 310,
      name: '1 shot 1 kill',
      uri: 'wc3_archer_1kill.wav',
      image: require('../../images/wc3/archer.gif')
    },
    {
      id: 311,
      name: 'Done',
      uri: 'wc3_archer_done.wav',
      image: require('../../images/wc3/archer.gif')
    },
    {
      id: 312,
      name: 'Fire',
      uri: 'wc3_archer_fire.wav',
      image: require('../../images/wc3/archer.gif')
    },
    {
      id: 313,
      name: 'Your eyes',
      uri: 'wc3_shade_eyes.wav',
      image: require('../../images/wc3/shade.gif')
    },
    {
      id: 314,
      name: 'Let see',
      uri: 'wc3_shade_see.wav',
      image: require('../../images/wc3/shade.gif')
    },
    {
      id: 315,
      name: 'Your blood is mine',
      uri: 'wc3_dh_attack.wav',
      image: require('../../images/wc3/Demonhunter.gif')
    },
    {
      id: 316,
      name: 'Revenge',
      uri: 'wc3_dh_revenge.wav',
      image: require('../../images/wc3/Demonhunter.gif')
    },
    {
      id: 317,
      name: 'For Kalimdor!',
      uri: 'wc3_dh_warcry.wav',
      image: require('../../images/wc3/Demonhunter.gif')
    },
    {
      id: 318,
      name: 'For Kalimdor!',
      uri: 'wc3_keeper_for_kalimdor.wav',
      image: require('../../images/wc3/keeper.gif')
    },
    {
      id: 319,
      name: 'Who threaten the wild?',
      uri: 'wc3_keeper_wild.wav',
      image: require('../../images/wc3/keeper.gif')
    },
    {
      id: 320,
      name: 'Natures wrath',
      uri: 'wc3_keeper_wrath.wav',
      image: require('../../images/wc3/keeper.gif')
    },
    {
      id: 321,
      name: 'So will be it',
      uri: 'wc3_lich_sobe.wav',
      image: require('../../images/wc3/lich.gif')
    },
    {
      id: 322,
      name: 'Brilliant!',
      uri: 'wc3_mk_brilliant.wav',
      image: require('../../images/wc3/Mountainking.gif')
    },
    {
      id: 323,
      name: 'Leading the way!',
      uri: 'wc3_mp_leading_way.wav',
      image: require('../../images/wc3/priestess.gif')
    },
    {
      id: 324,
      name: 'Vigilante',
      uri: 'wc3_mp_vigilante.wav',
      image: require('../../images/wc3/priestess.gif')
    },
    {
      id: 325,
      name: 'For the lich king!',
      uri: 'wc3_dk_for_the_lk.wav',
      image: require('../../images/wc3/Deathknight.gif')
    },
    {
      id: 326,
      name: 'Apacolipse',
      uri: 'wc3_dk_horsman.wav',
      image: require('../../images/wc3/Deathknight.gif')
    },
    {
      id: 327,
      name: 'Patience',
      uri: 'wc3_dk_patience.wav',
      image: require('../../images/wc3/Deathknight.gif')
    },
    {
      id: 328,
      name: 'Greetings',
      uri: 'wc3_dl_greetings.wav',
      image: require('../../images/wc3/dreadlord.gif')
    },
    {
      id: 329,
      name: 'Hunger',
      uri: 'wc3_dl_hunger.wav',
      image: require('../../images/wc3/dreadlord.gif')
    },
    {
      id: 330,
      name: 'Plan',
      uri: 'wc3_dl_plan.wav',
      image: require('../../images/wc3/dreadlord.gif')
    }
  ],
  [
    {
      id: 401,
      name: 'AWP fire',
      uri: 'cs_awp.mp3',
      image: require('../../images/cs/awp.jpg')
    },
    {
      id: 402,
      name: 'Night Hawk Fire',
      uri: 'cs_night_hawk_fire.mp3',
      image: require('../../images/cs/night_hawk.png')
    },
    {
      id: 403,
      name: 'Night Hawk Reload',
      uri: 'cs_night_hawk_reload.mp3',
      image: require('../../images/cs/night_hawk.png')
    },
    {
      id: 404,
      name: 'Affirmative',
      uri: 'cs_affirmative.mp3',
      image: require('../../images/cs_logo.png')
    },
    {
      id: 405,
      name: 'Follow Me',
      uri: 'cs_follow_me.mp3',
      image: require('../../images/cs_logo.png')
    },
    {
      id: 406,
      name: 'Go Go Go',
      uri: 'cs_gogogo.mp3',
      image: require('../../images/cs_logo.png')
    },
    {
      id: 407,
      name: 'Fire in the hole',
      uri: 'cs_fire_in_the_hole.mp3',
      image: require('../../images/cs_logo.png')
    },
    {
      id: 408,
      name: 'Negative',
      uri: 'cs_negative.mp3',
      image: require('../../images/cs_logo.png')
    },
    {
      id: 409,
      name: 'Bomb has been planted',
      uri: 'cs_bomb_planted.mp3',
      image: require('../../images/cs_logo.png')
    },
    {
      id: 410,
      name: 'Bomb has been defused',
      uri: 'cs_bomb_defused.mp3',
      image: require('../../images/cs_logo.png')
    }
  ],
  [
    {
      id: 501,
      name: 'Not Enough Minerals',
      uri: 'sc_ter_minerals.mp3',
      image: require('../../images/sc/terran.jpg')
    },
    {
      id: 502,
      name: 'Good Day',
      uri: 'sc_ter_bc_good_day.mp3',
      image: require('../../images/sc/Battlecruiser.jpg')
    },
    {
      id: 503,
      name: 'Need a light?',
      uri: 'sc_ter_firebat_light.mp3',
      image: require('../../images/sc/firebat.jpg')
    },
    {
      id: 504,
      name: 'Exterminator',
      uri: 'sc_ter_ghost_exterminator.mp3',
      image: require('../../images/sc/ghost.jpg')
    },
    {
      id: 505,
      name: 'Daying marine',
      uri: 'sc_ter_mar_die.mp3',
      image: require('../../images/sc/marine.gif')
    },
    {
      id: 506,
      name: 'Piece of me',
      uri: 'sc_ter_mar_piece.mp3',
      image: require('../../images/sc/marine.gif')
    },
    {
      id: 507,
      name: 'Rock and Roll',
      uri: 'sc_ter_mar_rocknroll.mp3',
      image: require('../../images/sc/marine.gif')
    },
    {
      id: 508,
      name: 'Medical attention',
      uri: 'sc_ter_medic_attention.mp3',
      image: require('../../images/sc/medic.jpg')
    },
    {
      id: 509,
      uri: 'sc_ter_scv.mp3',
      image: require('../../images/sc/scv.png')
    },
    {
      id: 510,
      name: 'Nuclear Launch',
      uri: 'sc_ter_nl.mp3',
      image: require('../../images/sc/terran.jpg')
    },
    {
      id: 511,
      name: 'Ready',
      uri: 'sc_ter_tank.mp3',
      image: require('../../images/sc/tank.jpg')
    },
    {
      id: 512,
      name: 'Evolution is complete',
      uri: 'sc_z_evolution.mp3',
      image: require('../../images/sc/zerg.jpg')
    },
    {
      id: 513,
      name: 'Minerals',
      uri: 'sc_z_minerals.mp3',
      image: require('../../images/sc/zerg.jpg')
    }
  ]
];

export const getSoundByGame = (gameId) => {
  return sounds[gameId];
}

export const getDefaultSounds = () => {
  return [sounds[0][2], sounds[1][1], sounds[1][3], sounds[2][1], sounds[5][0]];
}