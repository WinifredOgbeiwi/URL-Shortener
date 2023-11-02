import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import BackgroundImg from './images/bg-shorten-desktop.svg'
function UrlLink() {

  const [inputValue, setInputValue] = useState('')
  const [url, setUrl] = useState([])
  const [copied, setcopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) {
      alert('input url')
    }
    else {
      const apiCall = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        const data = await res.json()
        console.log(data.result)
        setUrl(data.result)
        setInputValue('')
      }
      apiCall()
    }

  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setcopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <>
      <section>
        <div
          className='bg-[#716588] rounded-lg w-full p-5 md:p-10'
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: 'cover'
          }}>
          <div className='flex flex-col md:flex-row gap-4 rounded-lg'>

            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="url"
              placeholder='Shorten a link here...'
              required
              className='rounded-md bg-white w-full py-2 px-5 border-red-800' />
            {/* <p className='text-cust-red text-xs -mt-3 italic'>Please add a link</p> */}

            <button
              type='submit'
              onClick={handleSubmit}
              className=' rounded-md px-1 bg-cust-cyan  py-[10px] md:py-0 lg:px-3 text-white font-semibold md:w-1/6 text-center w-full text-sm lg:text-sm'>
              Shorten it!

            </button>
          </div>
        </div>

        <div className='flex items-center bg-white py-2 px-5 rounded-md mt-5'>
          <p className='flex-1'>{url.original_link}</p>
          <div>
          <p className='text-cust-cyan'>{url.full_short_link}</p>
         
          <CopyToClipboard text={url.full_short_link}>
          <button
            onClick={() => setcopied('Copied')}
            onCopy={()=>setcopied(true)}
            className=' rounded-lg py-[8px] px-6 text-white cursor-pointer font-medium text-sm ml-5'
            style={copied ? { backgroundColor: '#3b3054' } : { backgroundColor: '#2acfcf' }}> {copied ? 'copied' : 'Copy '}</button>
           </CopyToClipboard>
        </div>
        </div>
      </section>

    </>
  )
}

export default UrlLink


