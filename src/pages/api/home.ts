import type { NextApiHandler } from 'next'
// import HomeInfoData  from '../../data/HomePageInfo'

const homeHandler: NextApiHandler = async (request, response) => {


  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))
  const data = {
   
  }
  response.json({ data: data})
}

export default homeHandler
