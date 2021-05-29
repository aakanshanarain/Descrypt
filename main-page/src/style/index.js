import styled from "styled-components"

export const Layout = styled.div`
    height: 100%; 
    width: 100%; 
    display: grid;
    place-items: center; 
    background: #e5edef;
`
export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    background: #fff; 
    padding: 10% 20%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 20px;
    text-align: center; 

    p { 
        margin-top: --10px;
        color: #777;
    }
`
export const BoxUpload = styled.div`
    display: flex; 
    flex-direction: column; 
    border: 1px dashed #777;
    padding: 36px 48px;
    border-radius: 10px; 

    .file-upload { 
        display: flex; 
        flex-wrap: wrap;

        label {
        cursor: pointer;  

        :hover { 
            opacity: 0.8; 
        }
        }

        >input{
            display: none; 
        }

       
    }
`
 
export const ImagePreview = styled.div`
    position: relative; 
     /* cursor: pointer;  */
    
    #uploaded-image{
        width: 345px; 
        height: 226px; 
        object-fit: cover; 
         border-radius: 20px;
        }

    .x { 
        background:#000; 
        border-radius: 5px; 
        opacity: 0.8;

        position: absolute; 
        z-index: 10; 
        right: 15px; 
        top: 20px; 
        cursor: pointer; 
        
        :hover { 
            opacity: 1; 
        }
    }
    
    
`