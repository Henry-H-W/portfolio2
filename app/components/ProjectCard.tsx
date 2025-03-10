import React from 'react'
import { CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl}:any) => {
  return (
    <div>
        <div className='h-[300px] w-[500px] rounded-t-xl relative group' style={{background: `url(${imgUrl})`, backgroundSize:'cover'}}>
            <div className='justify-center items-center overlay absolute top-0 left-0 right-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all cardtransition'>
                <Link href={gitUrl} className='mr-10 h-14 w-14 border-2 rounded-full relative border-[#ADB7BE] hover:border-white group/icon'>
                    <CodeBracketIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] group-hover/icon:text-white'/>
                </Link>

                <Link href={previewUrl} className='h-14 w-14 border-2 rounded-full relative border-[#ADB7BE] hover:border-white group/icon'>
                    <EyeIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] group-hover/icon:text-white'/>
                </Link>
            </div>
        </div>

        <div className='text-white flex flex-col flex-wrap w-[500px]'>
            <h4 className='mb-2 text-xl mt-1'>{title}</h4>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard