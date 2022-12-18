export default function getUrl(page,category,low,high,sort){
    let url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}`
    if(category){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}`
        if(low>0){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&low=${low}`
            if(sort){
                url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&low=${low}&sort=${sort}`
            }
        }
        if(high>0){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&high=${high}`
            if(sort){
                url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&high=${high}&sort=${sort}`
            }
        }
        if(sort){
                     url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&sort=${sort}`
        }
    }
    if(low>0){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&low=${low}`
        if(sort){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&low=${low}&sort=${sort}`
        }
    }
    if(high>0){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&high=${high}`
        if(sort){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&high=${high}&sort=${sort}`
        }
    }
    if(sort){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&sort=${sort}`
        if(category){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&sort=${sort}`
        if(low>0){
            
                url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&low=${low}&sort=${sort}`
            
        }
        if(high>0){
            
                url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&high=${high}&sort=${sort}`
            
        }
    }
    }
    if(high){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&high=${high}`
        if(category){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&high=${high}`   
        }
        if(sort){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&sort=${sort}&high=${high}`
            if(category){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&sort=${sort}&high=${high}`
           
        }
        }
    }
    if(low){
        url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&low=${low}`
        if(category){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&low=${low}`
           
            if(sort){
                         url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&sort=${sort}&low=${low}`
            }
        }
        if(sort){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&sort=${sort}&low=${low}`
            if(category){
            url=`https://crimson-indri-sock.cyclic.app/product?limit=18&page=${page}&category=${category}&sort=${sort}&low=${low}`
           
        }
        }
    }
    return url
}
