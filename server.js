const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

app.get('/OnlineGakka/api/OnlineGakka/Kyoushuusei', (req, res) => {
  if (req.query.KyoushuuseiNO != '9999999') {
    return res.send({
        response: {
          'RstCode': '1',
          'RstMess': '0103'
        }
    });
  }
  res.json({
      "response": {
      "KenCD": "99",
      "KyoushuushoCD": "99",
      "KyoushuuseiNO": "9999999",
      "KyoushuuseiName": "Name test",
      "KyoushuuseiNameKana": "Name Kana test",
      "BirthDate": "2000/01/01",
      "SeibetuKBN": "1",
      "NyuukouDate": "2000/01/01",
      "IsshuNishuKBN": "1",
      "MailAddress": "name@gmail.com",
      "ZaisekiKBN": "1",
      "RstCode": "0",
      "RstMess": "0000"
    }
  })
})

app.get('/OnlineGakka/api/OnlineGakka/KyoushuuseiGakka', (req, res) => {
  res.json({
      "RstCode": "0",
      "RstMess": "0000",
      "response": {
        "KyoushuushoNO": "9999999",
        "TaishouDankai": "1",
        "RishuuNo": "1",
        "JoukyouKBN": "3",
        "KyoushuuDate": "2021/07/01",
        "SidouinNO": "999",
        "KyoushuuHour": "5",
        "KyoushuuHourStartTime": "",
        "KyoushuuHourEndTime": "",
        "ZissiHouhou": "0",
        "KigenDate": "2021/01/01",
        "KyoushuuseiNo": "9999999",
        "TaishouDankai": "9999999",
        "RishuuNo": "2222",
        "ShidouinNO": "90"
      }
    })
})


app.post('/OnlineGakka/api/OnlineGakka/KyoushuuseiGakkaRireki', (req, res) => {
  console.log(req.body);
  res.json({
    "response": {
      "RstCode": "0",
      "RstMess": "0000"
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
