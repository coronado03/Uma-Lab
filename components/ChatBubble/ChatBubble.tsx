import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { motion } from 'framer-motion';


function ChatBubble() {
  const [showBubbles, setShowBubbles] = useState(false);
  const [bubbleImage, setBubbleImage] = useState("/ChatBubble/1.png");
6
  const handleBubbleClick = () => {
    setShowBubbles(!showBubbles);
    if (bubbleImage === '/ChatBubble/1.png') {
      setBubbleImage('/ChatBubble/4.png')
    }

    else {
      setBubbleImage('/ChatBubble/1.png')
    }
  };
  return (
    <div className='flex flex-col gap-y-5 items-center fixed bottom-16 left-[85%] lg:left-[92%] w-16'>
      {showBubbles && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-white bg-blue-600 hover:bg-blue-700 rounded-full p-4'
          >
            <Image
              src="/ChatBubble/1.png"
              width={35}
              height={50}
              alt="logo"
              className="invert"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='text-white bg-sky-600 hover:bg-sky-700 rounded-full p-4'
          >
            <Image
              src="/ChatBubble/1.png"
              width={35}
              height={50}
              alt="logo"
              className="invert"
            />
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='text-white bg-red-600 hover:bg-red-700 rounded-full p-4'
        onClick={handleBubbleClick}
      >
        <Image
          src={bubbleImage}
          width={35}
          height={50}
          alt="logo"
          className="invert"
        />
      </motion.div>
    </div>
  );
}


export default ChatBubble;