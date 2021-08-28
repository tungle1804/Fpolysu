import React, { useState } from 'react'
import { createPortal } from 'react-dom';

export function iframes({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, setRef] = useState();
    const container = ref?.contentDocument?.body;
    return (<>
     // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe title="iframe" ref={setRef}>{container && createPortal(children, container)}</iframe>
        {/* <span>tung</span> */}
    </>



    )
}
