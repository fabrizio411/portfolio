'use client'

import React, { useState } from 'react';
import { GoCopy } from 'react-icons/go';
import Tooltip from '../Tooltip';

const Contacto = () => {
  const mail = 'mourgliafabrizio@gmail.com';
  const [copied, setCopied] = useState<boolean>(false)

  const copy = () => {
    navigator.clipboard.writeText(mail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className='mt-28' id='contact'>
      <h2 className='text-3xl font-bold text-center'>Contacto</h2>
      <div className='flex items-center gap-2 mt-6'>
        <p className='bg-zinc-300 dark:bg-zinc-800 py-2 px-6 rounded-md text-xl flex-1'>{mail}</p>
        <Tooltip label={!copied ? 'Copy Link' : 'Copied'}>
          <button onClick={copy} className='py-2 px-2 rounded-md bg-secondary dark:bg-accent'>
            <GoCopy className='w-7 h-7 fill-text-1 dark:fill-dark-text-1' />
          </button>
        </Tooltip>
      </div>
    </section>
  );
}

export default Contacto;




// import React from 'react'
// import { GoCopy } from 'react-icons/go'
// import Tooltip from '../Tooltip'
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// const Contacto = () => {
//   const mail = 'mourgliafabrizio@gmail.com'

//   return (
//     <section className='mt-28' id='contact'>
//       <h2 className='text-3xl font-bold text-center'>Contacto</h2>
//       <div className='flex items-center gap-2 mt-6'>
//         <p className='bg-zinc-300 dark:bg-zinc-800 py-2 px-6 rounded-md text-xl flex-1'>{mail}</p>
//         <Tooltip label='Copy link'>
//           <CopyToClipboard text={mail} onCopy={() => {}}>
//             <button className='py-2 px-2 rounded-md bg-secondary dark:bg-accent'>
//               <GoCopy className='w-7 h-7 fill-text-1 dark:fill-dark-text-1' />
//             </button>
//           </CopyToClipboard>
//         </Tooltip>
//       </div>
//     </section>
//   )
// }

// export default Contacto