import React, { Component } from 'react'



function FucTodaysPlanApp(props) {
    const { onButtonClick, hasPaln } = props;
    return (
        <div className="body">
            {hasPaln ? <todaysPlan /> : null}
            <button onClick={onButtonClick}>
                ęłíěě
                </button>
        </div>
    );

}

