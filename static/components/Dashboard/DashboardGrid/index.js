import React from "react";
import {Responsive} from "react-grid-layout";
import './style.scss'
import BaseWidget from "../../BaseWidget";
import WidthProvider from './WidthProvider'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class DashboardGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("here");
        console.log("[===============[ SCREEN ]===============")
        console.log(screen.width);
        return (
            <div className={'DashboardGrid'}>

                    <ResponsiveGridLayout
                        rowHeight={screen.height/10}
                        breakpoints={{res: 4}}
                        cols={{res: 4}}
                        compactType={'vertical'}
                        draggableCancel={'.nonDraggable'}
                        autoSize={true}
                        verticalCompact={true}
                        onWidthChange={() => {
                            return null
                        }}
                    >
                        {this.props.componentDicts.map((componentDict, index) => {
                            return <div className={'widget'}
                                        itemevation={3}
                                        key={index}
                                        data-grid={{
                                            i: componentDict.id,
                                            x: componentDict.x,
                                            y: componentDict.y,
                                            h: componentDict.h,
                                            w: componentDict.w
                                        }}>

                                <BaseWidget componentDict={componentDict}
                                            handleRemove={this.props.handleRemove}
                                            handleCreate={this.props.handleCreate}/>
                            </div>
                        })}
                    </ResponsiveGridLayout>
            </div>
        );
    }
}
