import styled from 'styled-components'

const flexAlignFn = (align) => {
    if (align){
        if (align == 'row-center') {
            // 가로 가운데 정렬
            return 'justify-content: center;'
        }
        else if (align == 'column-center') { 
            // 세로 가운데 정렬
            return 'flex-direction: column; align-items: center;'
        }
        else if (align == 'row-vertical-center') { 
            // 가로 수직 가운데 정렬
            return 'align-items: center;'

        }
        else if (align == 'column-vertical-center') {
            // 세로 수직 가운데 정렬
            return 'flex-direction: column; justify-content: center;'
        }
    }
}

const colorFn = (color) => {
    if (color) {
        if (color == 'mainColor') {
            return '#0097F5'
        }
        else if (color == 'black') { 
            return '#000000'
        }
        else if (color == 'white') { 
            return '#FFFFFF'
        }
        else if (color == 'backgroundGray') { 
            return '#F0F3F5'
        }
        else if (color == 'borderGray') {
            return '#E1E4E6'
        }
        else if (color == 'letterGray') {
            return '#919699'
        }
        else if (color == 'iconGray') {
            return '#616466'
        }
        else if (color == 'red') {
            return '#FF0000'
        }
        else if (color == 'hotel') {
            return '#F06292'
        }
        else if (color == 'restaurant') {
            return '#FF9900'
        }
        else if (color == 'shop') {
            return '#5491F5'
        }
        else if (color == 'attraction') {
            return '#12B5CB'
        }
        else if (color == 'park') {
            return '#34A853'
        }
        else {
            return color
        }
    }
}

/////////////////////////////////////////////

export const Img = styled.img`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};


    width: ${(props) => props.width ? props.width : '24px'};
    height: ${(props) => props.height ? props.height : 'fit-content'};


    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Button = styled.button`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    z-index: ${(props) => props.zIndex ? props.zIndex : '100'};

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};      


    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};


    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : 'transparent'};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};
    

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const FlexDiv = styled.div`
    display: flex;

    z-index: ${(props) => props.zIndex ? props.zIndex : '100'};

    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'}; 
    flex-wrap: ${(props) => props.flexWrap ? props.flexWrap : ''};
    flex-basis: ${(props) => props.flexBasis ? props.flexBasis : ''};


    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    
    background-image: ${(props) =>  props.backgroundImg ? props.backgroundImg : ''};
    background-size: ${(props) =>  props.backgroundSize ? props.backgroundSize : 'cover'};

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : ''};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};


    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};

    
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
    align-items: ${(props) => props.alignItems ? props.alignItems : ''};


    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
    
    ${(props) => {
        const align = props.align
        return flexAlignFn(align)
    }}
`

export const Header = styled.header`
    z-index: ${(props) => props.zIndex ? props.zIndex : '100'};

    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'}; 


    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : ''};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};


    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};

    justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
    align-items: ${(props) => props.alignItems ? props.alignItems : ''};


    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }

    ${(props) => {
        const align = props.align
        return flexAlignFn(align)
    }}
`

export const Footer = styled.footer`
    z-index: ${(props) => props.zIndex ? props.zIndex : '100'};

    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'}; 


    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : ''};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};


    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
    align-items: ${(props) => props.alignItems ? props.alignItems : ''};


    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }

    ${(props) => {
        const align = props.align
        return flexAlignFn(align)
    }}

`

export const PTag = styled.p`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    flex-basis: ${(props) => props.flexBasis ? props.flexBasis : ''};

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};

    
    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }

    ${(props) => {
        const align = props.align
        return flexAlignFn(align)
    }}
`

export const Div = styled.div`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 
    
    text-align: ${(props) => props.textAlign ? props.textAlign : ''};
    
    flex-basis: ${(props) => props.flexBasis ? props.flexBasis : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    background-image: ${(props) =>  props.backgroundImg ? props.backgroundImg : ''};
    background-size: ${(props) =>  props.backgroundSize ? props.backgroundSize : 'cover'};

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};
    

    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }

    ${(props) => {
        const align = props.align
        return flexAlignFn(align)
    }}
`

export const H1 = styled.h1`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};

    
    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const H2 = styled.h2`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};

    
    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const H3 = styled.h3`
    display: ${(props) => props.display ? props.display : 'block'};
    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};

    
    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Span = styled.span`
    display: ${(props) => props.display ? props.display : 'block'};


    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : ''};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : ''};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};
    

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};


    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};
    
    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};


    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Input = styled.input`
    display: ${(props) => props.display ? props.display : 'block'};

    text-align: ${(props) => props.textAlign ? props.textAlign : ''};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  


    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    min-width: ${(props) => props.minWidth ? props.minWidth : ''};
    min-height: ${(props) => props.minHeight ? props.minHeight : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    

    color : ${(props) => props.color ? colorFn(props.color) : ''};
    background-color: ${(props) =>  props.backgroundColor ? colorFn(props.backgroundColor) : 'transparent'};
    border-color: ${(props) =>  props.borderColor ? colorFn(props.borderColor) : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-top: ${(props) => props.borderTop ? props.borderTop : ''};
    border-right: ${(props) => props.borderRight ? props.borderRight : ''};
    border-bottom: ${(props) => props.borderBottom ? props.borderBottom : ''};
    border-left: ${(props) => props.borderLeft ? props.borderLeft : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};

    outline: ${(props) => props.outline ? props.outline : 'none'};

    padding: ${(props) => props.padding ? props.padding : '' /* top right bottom left */};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : ''};
    padding-Bottom: ${(props) => props.paddingBottom ? props.paddingBottom : ''};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : ''};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
    margin: ${(props) => props.margin ? props.margin : '' /* top right bottom left */}; 
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    margin-Bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
    margin-right: ${(props) => props.marginRight ? props.marginRight : ''};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : ''};


    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &::placeholder {
        color : ${(props) => props.placeholderColor ? props.placeholderColor : ''};
    }
    
    &:hover {
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`