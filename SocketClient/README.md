
# Getting started

To run the sample replace client_id and client_secret with provided values.

Then run following commands:

```bash
npm i
npm start
```

# Environment

## Staging

[Application](https://staging.fortune-teller.io)

[OAuth Discovery](https://staging.fortune-teller.io:5000/.well-known/openid-configuration)

## Prod

[Application](https://app.fortune-teller.io)

[OAuth Discovery](https://auth.fortune-teller.io:5000/.well-known/openid-configuration)

# Example payload

## Event: match

```json
{
    "match_id": 4895754290,
    "game_time": 531,
    "series": {
        "series_id": 4895754290,
        "game_number": 1,
        "dire_wins": 0,
        "radiant_wins": 0
    },
    "radiant": {
        "team_id": 7250857,
        "name": "Global Liberation Army"
    },
    "dire": {
        "team_id": 6711082,
        "name": "Cyber Empire"
    },
    "markets": [
        {
            "id": "radiant_team_win",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire win",
                    "probability": 0.39400857979174225,
                    "odds": 2.34,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant win",
                    "probability": 0.6059914202082577,
                    "odds": 1.57,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_higher_gpm",
            "game_time": 531,
            "result": null,
            "status": "OnHold",
            "message": "Dire probability is higher than 0.80",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.8056918329657605,
                    "odds": 1.18,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.19430816703423948,
                    "odds": 4.27,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_higher_xpm",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.5967531526084985,
                    "odds": 1.57,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.4032468473915015,
                    "odds": 2.26,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_higher_kills",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.39449018374013367,
                    "odds": 2.3,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.6055098162598663,
                    "odds": 1.55,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_player_higher_gpm",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.7627697920771195,
                    "odds": 1.25,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.23723020792288052,
                    "odds": 3.61,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_player_higher_xpm",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.7399480726803465,
                    "odds": 1.28,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.26005192731965354,
                    "odds": 3.33,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_player_higher_kills",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.6025473899104314,
                    "odds": 1.56,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.39745261008956856,
                    "odds": 2.29,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_race_to_10_kills",
            "game_time": 531,
            "result": null,
            "status": "OnHold",
            "message": "Radiant have more than 6 kills",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire first",
                    "probability": 0.2919719542165588,
                    "odds": 3.01,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant first",
                    "probability": 0.7080280457834411,
                    "odds": 1.34,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_destroy_first_barrack",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.5566874743554734,
                    "odds": 1.68,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.4433125256445266,
                    "odds": 2.07,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_destroy_first_tower",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire",
                    "probability": 0.5598774252417322,
                    "odds": 1.67,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant",
                    "probability": 0.44012257475826777,
                    "odds": 2.08,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_first_blood",
            "game_time": 149,
            "result": {
                "outcome": 0,
                "label": "Dire"
            },
            "status": "Resolved",
            "message": "Market resolved successfully",
            "predictions": null
        },
        {
            "id": "radiant_team_race_to_20_kills",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire first",
                    "probability": 0.6317705502945619,
                    "odds": 1.49,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant first",
                    "probability": 0.36822944970543814,
                    "odds": 2.45,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_race_to_30_kills",
            "game_time": 531,
            "result": null,
            "status": "OnHold",
            "message": "Dire first probability is higher than 0.80",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire first",
                    "probability": 0.8857289717093367,
                    "odds": 1.08,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant first",
                    "probability": 0.11427102829066327,
                    "odds": 6.48,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_race_to_40_kills",
            "game_time": 531,
            "result": null,
            "status": "OnHold",
            "message": "Dire first probability is higher than 0.80",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire first",
                    "probability": 0.9270702496626473,
                    "odds": 1.03,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant first",
                    "probability": 0.07292975033735272,
                    "odds": 8.86,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        },
        {
            "id": "radiant_team_race_to_50_kills",
            "game_time": 531,
            "result": null,
            "status": "Open",
            "message": "No reason to put on hold found",
            "predictions": [
                {
                    "outcome": 0,
                    "label": "Dire first",
                    "probability": 0.6838203042159554,
                    "odds": 1.38,
                    "is_locked": false,
                    "lock_reason": null
                },
                {
                    "outcome": 1,
                    "label": "Radiant first",
                    "probability": 0.3161796957840446,
                    "odds": 2.81,
                    "is_locked": false,
                    "lock_reason": null
                }
            ]
        }
    ]
}
```

## Market status

Market status can have following values:

```json
[
    "Open",
    "OnHold",
    "WaitingForResult",
    "Resolved"
]
```

## Markets

Market id can have following values:

```json
[
    "radiant_team_win_outcome",
    "radiant_team_higher_gpm",
    "radiant_team_higher_xpm",
    "radiant_team_higher_kills",
    "radiant_team_first_blood",
    "radiant_team_first_roshan",
    "radiant_team_destroy_first_tower",
    "radiant_team_destroy_first_barrack",
    "radiant_player_higher_gpm",
    "radiant_player_higher_xpm",
    "radiant_player_higher_kills",
    "radiant_team_race_to_10_kills",
    "radiant_team_race_to_20_kills",
    "radiant_team_race_to_30_kills",
    "radiant_team_race_to_40_kills",
    "radiant_team_race_to_50_kills",
    "radiant_team_race_to_60_kills",
    "radiant_team_race_to_70_kills",
    "radiant_team_race_to_80_kills",
    "radiant_team_race_to_90_kills",
    "radiant_team_race_to_100_kills"
]
```
