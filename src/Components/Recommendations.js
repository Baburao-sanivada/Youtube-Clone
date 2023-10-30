import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { video_recommendations_api } from '../utils/paths';
import RecVideo from './RecVideo';
import ShimmerRecommemdeVideo from './ShimmerRecommemdeVideo';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    const channelId=useSelector((store)=> store.channelId.channelId);
    const [recVideoList,setRecVideoList]=useState(null);

    useEffect(()=>{
      fetchData();
    },[])
    const fetchData=async ()=>{
      const data=await fetch(video_recommendations_api+channelId);
      const jsondata=await data.json();
      setRecVideoList(jsondata?.items);
      // console.log(jsondata)
    }
  return recVideoList==null?<div>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
    <ShimmerRecommemdeVideo/>
  </div>:(
    <div>
      {
        recVideoList.map((recvideo,index)=> <Link to={"/watch?v="+recvideo?.contentDetails?.upload?.videoId} key={index}><RecVideo data={recvideo}/></Link> )
      }
    </div>
  )
}

export default Recommendations