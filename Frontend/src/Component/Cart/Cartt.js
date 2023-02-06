import store from "../../Store/Store"
import { GetCartData, GetPatchData, GetDeleteData } from '../../Actions/CartAction';
import axios from "axios";
export default function CARTMENU() {
    if (document.getElementById("CARTDI")) {
        document.getElementById("CARTDI").id = "CARTDIV"
        localStorage.setItem("Cartisopen", "true")
        axios.get('https://dull-plum-parrot-boot.cyclic.app/user/cartitem', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("TokenID")}`,
            }
        }).then((data) => {
            console.log(data.data);
        })
    } else {
        document.getElementById("CARTDIV").id = "CARTDI";
        localStorage.setItem("Cartisopen", "false")
    }

}

export const SearchDiv = (dispatch) => {


    if (document.getElementById("SearchDi")) {
        document.getElementById("SearchDi").id = "SearchDiv"

        localStorage.setItem("Searchisopen", "true")
    } else {
        dispatch({
            type: "GETCARTDATA",
            payload: []
        })
        document.getElementById("SearchDiv").id = "SearchDi"
        localStorage.setItem("Searchisopen", "false")
    }
}


export const DecreaseQTY = (id, dispatch, Array) => {
    let temp = []
    Array.map((el, index, ar) => {
        if (el.cartId == id) {
            el.Qty = Number(el.Qty) - 1;
            let data = {
                "Qty": el.Qty
            }
            axios.put(`https://dull-plum-parrot-boot.cyclic.app/user/cartitem/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "include",
                    "Authorization": `Bearer ${localStorage.getItem("TokenID")}`,
                }
            }).then((data) => {
                dispatch({
                    type: "GETCARTDATA",
                    payload: data.data.cartItem
                })
            })
        }
    })


}



export const IncreaseQTY = (id, dispatch, Array) => {
    let temp = []
    Array.map((el) => {
        if (el.cartId == id) {

            el.Qty = Number(el.Qty) + 1;
            let data = {
                "Qty": el.Qty
            }
            axios.put(`https://dull-plum-parrot-boot.cyclic.app/user/cartitem/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "include",
                    "Authorization": `Bearer ${localStorage.getItem("TokenID")}`,
                }
            }).then((data) => {
                console.log(data.data.cartItem);
                dispatch({
                    type: "GETCARTDATA",
                    payload: data.data.cartItem
                })
            })
        }
    })


}


export const SearchBar = (dispatch) => {
    let ans = debounced(FetchSearhData, 500, dispatch);
    ans();
    console.log("e.target.value")
}
function debounced(fn, delay, dispatch) {
    let Timeout;
    return function () {
        if (Timeout) clearTimeout(Timeout);

        Timeout = setTimeout(function () {
            fn(dispatch);
        }, delay);
    };
    // df();
}
async function FetchSearhData(dispatch) {
    let qure = document.getElementById('inputSearch').value;
    let res = await fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?q=${qure}`);
    let ans = await res.json();
    // console.log(ans)
    dispatch({
        type: "GETSEACHDATA",
        payload: ans
    })

}

export const ApplyCoupon = (e) => {
    if (e.key === 'Enter') {
        let n = document.getElementById('CouponInput').value;
        // let n=;
        if (n == 'Dressup10') {
            let amount = Number(localStorage.getItem('Total_Price'));
            let amound = (amount / 100) * 10
            // let amound=
            localStorage.setItem('Total_Price', (amount - amound))
            console.log("ok", (amount - amound))
            document.getElementById('GDP').innerHTML = `$ ${amount - amound}`
            document.getElementById('ApplyCopounText').innerHTML = `Coupon Applied  `
            document.getElementById('ApplyCopounText').style.background = `#c6f6d5`;
            document.getElementById('ApplyCopounText').style.color = `#133f2b`;
            document.getElementById('ApplyCopounText').style.background = `Coupon Applied  `
        }
        console.log(n);
    }

    // if
    // let o=e.target.value;
    // if()

}