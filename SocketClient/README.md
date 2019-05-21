
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

[OAuth Discovery](https://app.fortune-teller.io:5000/.well-known/openid-configuration)


# Example payload

## Event: match

```json
{
    "match_id": 6916,
    "game_time": 1415,
    "series": {
        "series_id": 6235,
        "game_number": 1,
        "dire_wins": 0,
        "radiant_wins": 0
    },
    "radiant": {
        "team_id": 123,
        "name": "BR"
    },
    "dire": {
        "team_id": 122,
        "name": "US"
    },
    "markets": {
        "radiant_team_win": {
            "result": null,
            "prediction": {
                "outcome": 0,
                "game_time": 1415,
                "prediction": [
                    0.83,
                    0.17
                ]
            },
            "state": {
                "status": "OnHold",
                "game_time": 1415,
                "reason": {
                    "message": "Probability is higher than 0.80"
                }
            }
        }
    }
}
```

Resolved case

```json
{
    "match_id": 6916,
    "game_time": 2200,
        "series": {
        "series_id": 6235,
        "game_number": 1,
        "dire_wins": 0,
        "radiant_wins": 0
    },
    "radiant": {
        "team_id": 123,
        "name": "BR"
    },
    "dire": {
        "team_id": 122,
        "name": "US"
    },
    "markets": {
        "radiant_team_win": {
            "result": {
                "outcome": 0,
                "game_time": 2200
            },
            "prediction": {
                "outcome": 0,
                "game_time": 2198,
                "prediction": [
                    0.96,
                    0.04
                ]
            },
            "state": {
                "status": "Resolved",
                "game_time": 2200,
                "reason": {
                    "message": "Market resolved successfully"
                }
            }
        }
    }
}
```

## Market status

Market status can have following values: "Open", "OnHold", "WaitingForResult", "Resolved"

Typescript definition:

```typescript
enum MarketStatus {
    Open,
    OnHold,
    WaitingForResult,
    Resolved
}
```
