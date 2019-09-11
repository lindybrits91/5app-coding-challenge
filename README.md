# 5app-coding-challenge

This application receives a `POST` request on `\` to modify a payload and return a response as seen below. The payload is modified as follows:

 - Only items with `count` greater than `1` will be returned.
 - A logo has to be picked and the `url` has to be returned as `thumbnail`.
 - The logo cannot be smaller than 64x64 or larger than 128x128.
 - The logo with highest resolution will be picked.
 - If there are no logos available within the constraints, `thumbnail` will be returned as `null`.

#### PAYLOAD
```
{
	"payload": [
		{
			"name": "Molly",
			"count": 12,
			"logos": [{
				"size": "16x16",
				"url": "https://example.com/16x16.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		},
		{
			"name": "Dolly",
			"count": 0,
			"logos": [{
				"size": "128x128",
				"url": "https://example.com/128x128.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		},
		{
			"name": "Polly",
			"count": 4,
			"logos": [{
				"size": "16x16",
				"url": "https://example.com/16x16.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		}
	]
}
```
### RESPONSE
```
{
	"response": [
		{
			"name": "Molly",
			"count": 12,
			"thumbnail": "https://example.com/64x64.png"
		},
		{
			"name": "Polly",
			"count": 4,
			"thumbnail": "https://example.com/64x64.png"
		}
	]
}
```