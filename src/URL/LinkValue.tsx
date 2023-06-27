import React, {useState} from 'react'
import CopyToClipboard  from 'react-copy-to-clipboard'

const LinkValue = () => {
    const [trimedLink, setTrimedLink] = useState('fghgjkl')
    const [copied, setCopied] = useState(false)
  return (
    <div>
        <p>{trimedLink}</p>
        <CopyToClipboard text ={trimedLink}>
            <button className="Clip" onCopy={() =>setCopied(true)}>Copy to clipboard</button>
        </CopyToClipboard>
    </div>
  )
}

export default LinkValue