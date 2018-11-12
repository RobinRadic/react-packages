import React from 'react';
import { Alert } from 'antd';

export type MessageType = 'error' | 'info' | 'success' | 'warning'


export interface MessagesProps {
    messages: Partial<Record<MessageType, string[]>>
    className?: string
    style?: React.CSSProperties
}

export class Messages extends React.Component<MessagesProps> {
    render() {
        const { messages, ...props } = this.props
        let count                    = 0;
        const els                    = Object.keys(messages).map((type: MessageType) => {
            let msgs = messages[ type ];
            if ( Array.isArray(msgs) ) {
                return msgs.map((msg, i) => {
                    count ++;
                    return <Alert key={type + '_' + i} message={msg} type={type}/>;
                })
            }
            return null;
        })
        if ( count === 0 ) return null;
        return <div {...props}>{els}</div>
    }
}