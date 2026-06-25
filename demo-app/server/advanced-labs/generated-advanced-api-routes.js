// 本文件由 scripts/generate-advanced-job-track.mjs 生成。
// 每一天都有独立服务端 handler；修改课程后运行 npm run advanced:generate。
import { handleAdvancedW01D01 } from './week-01/day-01.js'
import { handleAdvancedW01D02 } from './week-01/day-02.js'
import { handleAdvancedW01D03 } from './week-01/day-03.js'
import { handleAdvancedW01D04 } from './week-01/day-04.js'
import { handleAdvancedW01D05 } from './week-01/day-05.js'
import { handleAdvancedW02D01 } from './week-02/day-01.js'
import { handleAdvancedW02D02 } from './week-02/day-02.js'
import { handleAdvancedW02D03 } from './week-02/day-03.js'
import { handleAdvancedW02D04 } from './week-02/day-04.js'
import { handleAdvancedW02D05 } from './week-02/day-05.js'
import { handleAdvancedW03D01 } from './week-03/day-01.js'
import { handleAdvancedW03D02 } from './week-03/day-02.js'
import { handleAdvancedW03D03 } from './week-03/day-03.js'
import { handleAdvancedW03D04 } from './week-03/day-04.js'
import { handleAdvancedW03D05 } from './week-03/day-05.js'
import { handleAdvancedW04D01 } from './week-04/day-01.js'
import { handleAdvancedW04D02 } from './week-04/day-02.js'
import { handleAdvancedW04D03 } from './week-04/day-03.js'
import { handleAdvancedW04D04 } from './week-04/day-04.js'
import { handleAdvancedW04D05 } from './week-04/day-05.js'
import { handleAdvancedW05D01 } from './week-05/day-01.js'
import { handleAdvancedW05D02 } from './week-05/day-02.js'
import { handleAdvancedW05D03 } from './week-05/day-03.js'
import { handleAdvancedW05D04 } from './week-05/day-04.js'
import { handleAdvancedW05D05 } from './week-05/day-05.js'
import { handleAdvancedW06D01 } from './week-06/day-01.js'
import { handleAdvancedW06D02 } from './week-06/day-02.js'
import { handleAdvancedW06D03 } from './week-06/day-03.js'
import { handleAdvancedW06D04 } from './week-06/day-04.js'
import { handleAdvancedW06D05 } from './week-06/day-05.js'
import { handleAdvancedW07D01 } from './week-07/day-01.js'
import { handleAdvancedW07D02 } from './week-07/day-02.js'
import { handleAdvancedW07D03 } from './week-07/day-03.js'
import { handleAdvancedW07D04 } from './week-07/day-04.js'
import { handleAdvancedW07D05 } from './week-07/day-05.js'
import { handleAdvancedW08D01 } from './week-08/day-01.js'
import { handleAdvancedW08D02 } from './week-08/day-02.js'
import { handleAdvancedW08D03 } from './week-08/day-03.js'
import { handleAdvancedW08D04 } from './week-08/day-04.js'
import { handleAdvancedW08D05 } from './week-08/day-05.js'
import { handleAdvancedW09D01 } from './week-09/day-01.js'
import { handleAdvancedW09D02 } from './week-09/day-02.js'
import { handleAdvancedW09D03 } from './week-09/day-03.js'
import { handleAdvancedW09D04 } from './week-09/day-04.js'
import { handleAdvancedW09D05 } from './week-09/day-05.js'
import { handleAdvancedW10D01 } from './week-10/day-01.js'
import { handleAdvancedW10D02 } from './week-10/day-02.js'
import { handleAdvancedW10D03 } from './week-10/day-03.js'
import { handleAdvancedW10D04 } from './week-10/day-04.js'
import { handleAdvancedW10D05 } from './week-10/day-05.js'
import { handleAdvancedW11D01 } from './week-11/day-01.js'
import { handleAdvancedW11D02 } from './week-11/day-02.js'
import { handleAdvancedW11D03 } from './week-11/day-03.js'
import { handleAdvancedW11D04 } from './week-11/day-04.js'
import { handleAdvancedW11D05 } from './week-11/day-05.js'
import { handleAdvancedW12D01 } from './week-12/day-01.js'
import { handleAdvancedW12D02 } from './week-12/day-02.js'
import { handleAdvancedW12D03 } from './week-12/day-03.js'
import { handleAdvancedW12D04 } from './week-12/day-04.js'
import { handleAdvancedW12D05 } from './week-12/day-05.js'
import { handleAdvancedW13D01 } from './week-13/day-01.js'
import { handleAdvancedW13D02 } from './week-13/day-02.js'
import { handleAdvancedW13D03 } from './week-13/day-03.js'
import { handleAdvancedW13D04 } from './week-13/day-04.js'
import { handleAdvancedW13D05 } from './week-13/day-05.js'
import { handleAdvancedW14D01 } from './week-14/day-01.js'
import { handleAdvancedW14D02 } from './week-14/day-02.js'
import { handleAdvancedW14D03 } from './week-14/day-03.js'
import { handleAdvancedW14D04 } from './week-14/day-04.js'
import { handleAdvancedW14D05 } from './week-14/day-05.js'
import { handleAdvancedW15D01 } from './week-15/day-01.js'
import { handleAdvancedW15D02 } from './week-15/day-02.js'
import { handleAdvancedW15D03 } from './week-15/day-03.js'
import { handleAdvancedW15D04 } from './week-15/day-04.js'
import { handleAdvancedW15D05 } from './week-15/day-05.js'
import { handleAdvancedW16D01 } from './week-16/day-01.js'
import { handleAdvancedW16D02 } from './week-16/day-02.js'
import { handleAdvancedW16D03 } from './week-16/day-03.js'
import { handleAdvancedW16D04 } from './week-16/day-04.js'
import { handleAdvancedW16D05 } from './week-16/day-05.js'
import { handleAdvancedW17D01 } from './week-17/day-01.js'
import { handleAdvancedW17D02 } from './week-17/day-02.js'
import { handleAdvancedW17D03 } from './week-17/day-03.js'
import { handleAdvancedW17D04 } from './week-17/day-04.js'
import { handleAdvancedW17D05 } from './week-17/day-05.js'
import { handleAdvancedW18D01 } from './week-18/day-01.js'
import { handleAdvancedW18D02 } from './week-18/day-02.js'
import { handleAdvancedW18D03 } from './week-18/day-03.js'
import { handleAdvancedW18D04 } from './week-18/day-04.js'
import { handleAdvancedW18D05 } from './week-18/day-05.js'
import { handleAdvancedW19D01 } from './week-19/day-01.js'
import { handleAdvancedW19D02 } from './week-19/day-02.js'
import { handleAdvancedW19D03 } from './week-19/day-03.js'
import { handleAdvancedW19D04 } from './week-19/day-04.js'
import { handleAdvancedW19D05 } from './week-19/day-05.js'
import { handleAdvancedW20D01 } from './week-20/day-01.js'
import { handleAdvancedW20D02 } from './week-20/day-02.js'
import { handleAdvancedW20D03 } from './week-20/day-03.js'
import { handleAdvancedW20D04 } from './week-20/day-04.js'
import { handleAdvancedW20D05 } from './week-20/day-05.js'

export const advancedApiRoutes = new Map([
  ['/api/advanced/week-01/day-01', handleAdvancedW01D01],
  ['/api/advanced/week-01/day-02', handleAdvancedW01D02],
  ['/api/advanced/week-01/day-03', handleAdvancedW01D03],
  ['/api/advanced/week-01/day-04', handleAdvancedW01D04],
  ['/api/advanced/week-01/day-05', handleAdvancedW01D05],
  ['/api/advanced/week-02/day-01', handleAdvancedW02D01],
  ['/api/advanced/week-02/day-02', handleAdvancedW02D02],
  ['/api/advanced/week-02/day-03', handleAdvancedW02D03],
  ['/api/advanced/week-02/day-04', handleAdvancedW02D04],
  ['/api/advanced/week-02/day-05', handleAdvancedW02D05],
  ['/api/advanced/week-03/day-01', handleAdvancedW03D01],
  ['/api/advanced/week-03/day-02', handleAdvancedW03D02],
  ['/api/advanced/week-03/day-03', handleAdvancedW03D03],
  ['/api/advanced/week-03/day-04', handleAdvancedW03D04],
  ['/api/advanced/week-03/day-05', handleAdvancedW03D05],
  ['/api/advanced/week-04/day-01', handleAdvancedW04D01],
  ['/api/advanced/week-04/day-02', handleAdvancedW04D02],
  ['/api/advanced/week-04/day-03', handleAdvancedW04D03],
  ['/api/advanced/week-04/day-04', handleAdvancedW04D04],
  ['/api/advanced/week-04/day-05', handleAdvancedW04D05],
  ['/api/advanced/week-05/day-01', handleAdvancedW05D01],
  ['/api/advanced/week-05/day-02', handleAdvancedW05D02],
  ['/api/advanced/week-05/day-03', handleAdvancedW05D03],
  ['/api/advanced/week-05/day-04', handleAdvancedW05D04],
  ['/api/advanced/week-05/day-05', handleAdvancedW05D05],
  ['/api/advanced/week-06/day-01', handleAdvancedW06D01],
  ['/api/advanced/week-06/day-02', handleAdvancedW06D02],
  ['/api/advanced/week-06/day-03', handleAdvancedW06D03],
  ['/api/advanced/week-06/day-04', handleAdvancedW06D04],
  ['/api/advanced/week-06/day-05', handleAdvancedW06D05],
  ['/api/advanced/week-07/day-01', handleAdvancedW07D01],
  ['/api/advanced/week-07/day-02', handleAdvancedW07D02],
  ['/api/advanced/week-07/day-03', handleAdvancedW07D03],
  ['/api/advanced/week-07/day-04', handleAdvancedW07D04],
  ['/api/advanced/week-07/day-05', handleAdvancedW07D05],
  ['/api/advanced/week-08/day-01', handleAdvancedW08D01],
  ['/api/advanced/week-08/day-02', handleAdvancedW08D02],
  ['/api/advanced/week-08/day-03', handleAdvancedW08D03],
  ['/api/advanced/week-08/day-04', handleAdvancedW08D04],
  ['/api/advanced/week-08/day-05', handleAdvancedW08D05],
  ['/api/advanced/week-09/day-01', handleAdvancedW09D01],
  ['/api/advanced/week-09/day-02', handleAdvancedW09D02],
  ['/api/advanced/week-09/day-03', handleAdvancedW09D03],
  ['/api/advanced/week-09/day-04', handleAdvancedW09D04],
  ['/api/advanced/week-09/day-05', handleAdvancedW09D05],
  ['/api/advanced/week-10/day-01', handleAdvancedW10D01],
  ['/api/advanced/week-10/day-02', handleAdvancedW10D02],
  ['/api/advanced/week-10/day-03', handleAdvancedW10D03],
  ['/api/advanced/week-10/day-04', handleAdvancedW10D04],
  ['/api/advanced/week-10/day-05', handleAdvancedW10D05],
  ['/api/advanced/week-11/day-01', handleAdvancedW11D01],
  ['/api/advanced/week-11/day-02', handleAdvancedW11D02],
  ['/api/advanced/week-11/day-03', handleAdvancedW11D03],
  ['/api/advanced/week-11/day-04', handleAdvancedW11D04],
  ['/api/advanced/week-11/day-05', handleAdvancedW11D05],
  ['/api/advanced/week-12/day-01', handleAdvancedW12D01],
  ['/api/advanced/week-12/day-02', handleAdvancedW12D02],
  ['/api/advanced/week-12/day-03', handleAdvancedW12D03],
  ['/api/advanced/week-12/day-04', handleAdvancedW12D04],
  ['/api/advanced/week-12/day-05', handleAdvancedW12D05],
  ['/api/advanced/week-13/day-01', handleAdvancedW13D01],
  ['/api/advanced/week-13/day-02', handleAdvancedW13D02],
  ['/api/advanced/week-13/day-03', handleAdvancedW13D03],
  ['/api/advanced/week-13/day-04', handleAdvancedW13D04],
  ['/api/advanced/week-13/day-05', handleAdvancedW13D05],
  ['/api/advanced/week-14/day-01', handleAdvancedW14D01],
  ['/api/advanced/week-14/day-02', handleAdvancedW14D02],
  ['/api/advanced/week-14/day-03', handleAdvancedW14D03],
  ['/api/advanced/week-14/day-04', handleAdvancedW14D04],
  ['/api/advanced/week-14/day-05', handleAdvancedW14D05],
  ['/api/advanced/week-15/day-01', handleAdvancedW15D01],
  ['/api/advanced/week-15/day-02', handleAdvancedW15D02],
  ['/api/advanced/week-15/day-03', handleAdvancedW15D03],
  ['/api/advanced/week-15/day-04', handleAdvancedW15D04],
  ['/api/advanced/week-15/day-05', handleAdvancedW15D05],
  ['/api/advanced/week-16/day-01', handleAdvancedW16D01],
  ['/api/advanced/week-16/day-02', handleAdvancedW16D02],
  ['/api/advanced/week-16/day-03', handleAdvancedW16D03],
  ['/api/advanced/week-16/day-04', handleAdvancedW16D04],
  ['/api/advanced/week-16/day-05', handleAdvancedW16D05],
  ['/api/advanced/week-17/day-01', handleAdvancedW17D01],
  ['/api/advanced/week-17/day-02', handleAdvancedW17D02],
  ['/api/advanced/week-17/day-03', handleAdvancedW17D03],
  ['/api/advanced/week-17/day-04', handleAdvancedW17D04],
  ['/api/advanced/week-17/day-05', handleAdvancedW17D05],
  ['/api/advanced/week-18/day-01', handleAdvancedW18D01],
  ['/api/advanced/week-18/day-02', handleAdvancedW18D02],
  ['/api/advanced/week-18/day-03', handleAdvancedW18D03],
  ['/api/advanced/week-18/day-04', handleAdvancedW18D04],
  ['/api/advanced/week-18/day-05', handleAdvancedW18D05],
  ['/api/advanced/week-19/day-01', handleAdvancedW19D01],
  ['/api/advanced/week-19/day-02', handleAdvancedW19D02],
  ['/api/advanced/week-19/day-03', handleAdvancedW19D03],
  ['/api/advanced/week-19/day-04', handleAdvancedW19D04],
  ['/api/advanced/week-19/day-05', handleAdvancedW19D05],
  ['/api/advanced/week-20/day-01', handleAdvancedW20D01],
  ['/api/advanced/week-20/day-02', handleAdvancedW20D02],
  ['/api/advanced/week-20/day-03', handleAdvancedW20D03],
  ['/api/advanced/week-20/day-04', handleAdvancedW20D04],
  ['/api/advanced/week-20/day-05', handleAdvancedW20D05],
])
