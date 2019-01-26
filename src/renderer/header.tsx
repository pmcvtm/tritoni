import * as React from 'react';

export interface HeaderProps { name: string; }

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
        <div>
            <h1>{this.props.name}</h1>
        </div>
    )}
}
