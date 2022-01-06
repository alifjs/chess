/////////////////////////////////////////////
function positions_of_bishop(num,colour) {
    let all_positions = []
    let opposition_positions=[]
    let own_positions=[]
    //right-up
    if(colour=='white'){
        opposition_positions= positions_of_black
        own_positions= positions_of_white
    }else if(colour=='black'){
        opposition_positions= positions_of_white
        own_positions= positions_of_black
    }
    let right_up = []
    if (num % 8 != 0 && (num > 8)) {
        let value = 9
        for (let i = 1; value % 8 != 0 && value > 8; i++) {
            value = num - 8 * i + i
            right_up.push(value)
        }
    }
    let right_up_2= right_up
    right_up.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            right_up_2=right_up_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] < y){
                    return true
                }
            })
        }
    })
    let right_up_3=right_up_2
    right_up_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            right_up_3=right_up_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] <= y){
                    return true
                }
            })
        }
    })
    //right_down
    let right_down = []
    if (num % 8 != 0 && (num < 57)) {
        let value = 9
        for (let i = 1; value % 8 != 0 && value < 57; i++) {
            value = num + 8 * i + i
            right_down.push(value)
        }
    }
    let right_down_2= right_down
    right_down.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            right_down_2=right_down_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] > y){
                    return true
                }
            })
        }
    })
    let right_down_3=right_down_2
    right_down_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            right_down_3=right_down_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] >= y){
                    return true
                }
            })
        }
    })
    //left-up
    let left_up = []
    if (num % 8 != 1 && num > 8) {
        let value = 10
        for (let i = 1; value % 8 != 1 && value > 8; i++) {
            value = num - 8 * i - i
            left_up.push(value)
        }
    }
    let left_up_2= left_up
    left_up.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            left_up_2=left_up_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] < y){
                    return true
                }
            })
        }
    })
    let left_up_3 = left_up_2
    left_up_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            left_up_3 = left_up_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] <= y){
                    return true
                }
            })
        }
    })
    //left-down
    let left_down = []
    if (num % 8 != 1 && num < 57) {
        let value = 10
        for (let i = 1; value % 8 != 1 && value < 57; i++) {
            value = num + 8 * i - i
            left_down.push(value)
        }
    }
    let left_down_2= left_down
    left_down.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            left_down_2=left_down_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] > y){
                    return true
                }
            })
        }
    })
    let left_down_3=left_down_2
    left_down_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            left_down_3 = left_down_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] >= y){
                    return true
                }
            })
        }
    })
    right_up_3.forEach(function (x) {
        all_positions.push(x)
    })
    right_down_3.forEach(function (x) {
        all_positions.push(x)
    })
    left_up_3.forEach(function (x) {
        all_positions.push(x)
    })
    left_down_3.forEach(function (x) {
        all_positions.push(x)
    })
    return all_positions
}
/////////////////////////////////////////////////
function positions_of_horse(num,colour){
    let all_positions=[]
    let own_positions=[]
    if(colour=='white'){
        own_positions= positions_of_white
    }else if(colour=='black'){
        own_positions= positions_of_black
    }
    //up_right
    if(num > 16 && num % 8 != 0){//horse not in the 1st 2 rows and not in the right wall
        all_positions.push(num-2*8+1)
    }
    //up_left
    if(num > 16 && num % 8 != 1){//horse not in the 1st 2 rows and not in the left wall
        all_positions.push(num-2*8-1)
    }
    //down_right
    if(num < 49 && num % 8 != 0){//horse not in the last 2 rows and not in the right wall
        all_positions.push(num+2*8+1)
    }
    //down_left
    if(num < 49 && num % 8 != 1){//horse not in the last 2 rows and horse not in the left wall
        all_positions.push(num+2*8-1)
    }
    //right_up
    if(num%8 != 0 && num%8 != 7 && num > 8){//horse not in the 2 columns of right wall and not in 1st row
        all_positions.push(num+2-8)
    }
    //right_down
    if(num%8 != 0 && num%8 != 7 && num< 57){//horse not in the 2 columns of right wall and not in the last row
        all_positions.push(num+2+8)
    }
    //left_up
    if(num%8 != 1 && num%8 != 2 && num > 8){//horse not in the 2 columns of left wall and not in 1st row
        all_positions.push(num-2-8)
    }
    if(num%8 != 1 && num%8 != 2 && num < 57){//horse not in the 2 columns of left wall and not in last row
        all_positions.push(num-2+8)
    }
    all_positions=all_positions.filter(function(x){
        if(own_positions.indexOf(x)== -1){
            return true
        }
    })
    return all_positions
}
/////////////////////////////////////////////////
function positions_of_rook(num,colour){
    let all_positions=[]
    let opposition_positions=[]
    let own_positions=[]
    if(colour=='white'){
        opposition_positions= positions_of_black
        own_positions= positions_of_white
    }else if(colour=='black'){
        opposition_positions= positions_of_white
        own_positions= positions_of_black
    }
    //up
    let up=[]
    if(num > 8){//if the rook is not in the 1st row
        let value=9
        for(let i=1;value>8;i++){
            value=num-8*i
            up.push(value)
        }
    }
    let up_2= up
    up.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            up_2=up_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] < y){
                    return true
                }
            })
        }
    })
    let up_3 = up_2
    up_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            up_3 = up_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] <= y){
                    return true
                }
            })
        }
    })
    //down
    let down=[]
    if(num < 57){//if the rook is not in the last row
        let value=9
        for(let i=1;value< 57;i++){
            value=num+8*i
            down.push(value)
        }
    }
    let down_2= down
    down.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            down_2 = down_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] > y){
                    return true
                }
            })
        }
    })
    let down_3 = down_2
    down_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            down_3 = down_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] >= y){
                    return true
                }
            })
        }
    })
    //right
    let right=[]
    if(num % 8 != 0){//if the rook is not hitting the right wall
        let value=9
        for(let i=1;value % 8 != 0;i++){//keep on appending positions until the rook hits the right wall
            value=num+i
            right.push(value)
        }
    }
    let right_2= right
    right.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            right_2 = right_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] > y){
                    return true
                }
            })
        }
    })
    let right_3 = right_2
    right_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            right_3 = right_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] >= y){
                    return true
                }
            })
        }
    })
    //left
    let left=[]
    if(num % 8 != 1){//if the rook is not hitting the left wall
        let value=10
        for(let i=1;value % 8 != 1;i++){//keep on appending positions until the rook hits the left wall
            value=num-i
            left.push(value)
        }
    }
    let left_2 = left
    left.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            left_2=left_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] < y){
                    return true
                }
            })
        }
    })
    let left_3 = left_2
    left_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            left_3 = left_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] <= y){
                    return true
                }
            })
        }
    })
    up_3.forEach(function(x){
        all_positions.push(x)
    })
    down_3.forEach(function(x){
        all_positions.push(x)
    })
    right_3.forEach(function(x){
        all_positions.push(x)
    })
    left_3.forEach(function(x){
        all_positions.push(x)
    })
    return all_positions
}
/////////////////////////////////////////////////
function positions_of_queen(num,colour){
    let all_positions= positions_of_bishop(num,colour)
    let rook = positions_of_rook(num,colour)
    rook.forEach(function(x){
        all_positions.push(x)
    })
    return all_positions
}
/////////////////////////////////////////////////
function positions_of_king(num,colour){
    let all_positions=[]
    let own_positions=[]
    if(colour=='white'){
        own_positions= positions_of_white
    }else if(colour=='black'){
        own_positions= positions_of_black
    }
/*-----------------diagonals-----------------------*/
    //right-up
    let right_up = []
    if (num % 8 != 0 && (num > 8)) {
        right_up.push(num-8+1)
    }
    //right_down
    let right_down = []
    if (num % 8 != 0 && (num < 57)) {
        right_down.push(num+8+1)
    }
    //left-up
    let left_up = []
    if (num % 8 != 1 && num > 8) {
        left_up.push(num-8-1)
    }
    //left-down
    let left_down = []
    if (num % 8 != 1 && num < 57) {
        left_down.push(num+8-1)
    }
    right_up.forEach(function (x) {
        all_positions.push(x)
    })
    right_down.forEach(function (x) {
        all_positions.push(x)
    })
    left_up.forEach(function (x) {
        all_positions.push(x)
    })
    left_down.forEach(function (x) {
        all_positions.push(x)
    })
/*---------------end of diagonals-------------------------*/ 
/*---------------rook movement----------------------------*/
    //up
    let up=[]
    if(num > 8){//if the king is not in the 1st row
        up.push(num-8)
    }
    //down
    let down=[]
    if(num < 57){//if the king is not in the last row
        down.push(num+8)
    }
    //right
    let right=[]
    if(num % 8 != 0){//if the king is not hitting the right wall
        right.push(num+1)
    }
    //left
    let left=[]
    if(num % 8 != 1){//if the king is not hitting the left wall
        left.push(num-1)
    }
    up.forEach(function(x){
        all_positions.push(x)
    })
    down.forEach(function(x){
        all_positions.push(x)
    })
    right.forEach(function(x){
        all_positions.push(x)
    })
    left.forEach(function(x){
        all_positions.push(x)
    })
    all_positions=all_positions.filter(function(x){
        if(own_positions.indexOf(x)== -1){
            return true
        }

    })
    return all_positions
}
/////////////////////////////////////////////////
function white_pawn_positions(num){
    let all_positions=[]
    let opposition_positions= positions_of_black
    let own_positions= positions_of_white
    if(num>8){
        if(48 < num && num < 57){
            all_positions.push(num-8)
            all_positions.push(num-16)
        }else{
            all_positions.push(num-8)
        }
    }
    let all_positions_2= all_positions
    all_positions.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            all_positions_2=all_positions_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] < y){
                    return true
                }
            })
        }
    })
    let all_positions_3 = all_positions_2
    all_positions_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            all_positions_3 = all_positions_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] < y){
                    return true
                }
            })
        }
    })
    if(opposition_positions.indexOf(num-8-1)!= -1){//eating opposition's pawn (to the left)
        if(num%8 != 1){//if my pawn not in the left wall
            all_positions_3.push(num-8-1)
        }
    }
    if(opposition_positions.indexOf(num-8+1)!= -1){//eating opposition's pawn (to the right)
        if(num%8 != 0){//if my pawn not in the right wall
            all_positions_3.push(num-8+1)
        }
    }
    return all_positions_3
}
/////////////////////////////////////////////////
function black_pawn_positions(num){
    let all_positions=[]
    let opposition_positions= positions_of_white
    let own_positions= positions_of_black
    if(num < 57){
        if(8 < num && num < 17){
            all_positions.push(num+8)
            all_positions.push(num+16)
        }else{
            all_positions.push(num+8)
        }
    }
    let all_positions_2= all_positions
    all_positions.forEach(function(x){
        if(own_positions.indexOf(x)!= -1){
            all_positions_2=all_positions_2.filter(function(y){//get rid of everything smaller than 'matched'
                if(own_positions[own_positions.indexOf(x)] > y){
                    return true
                }
            })
        }
    })
    let all_positions_3 = all_positions_2
    all_positions_2.forEach(function(x){
        if(opposition_positions.indexOf(x) != -1){
            all_positions_3 = all_positions_3.filter(function(y){
                if(opposition_positions[opposition_positions.indexOf(x)] > y){
                    return true
                }
            })
        }
    })
    if(opposition_positions.indexOf(num+8-1)!= -1){
        if(num%8 != 1){//if my pawn not in the left wall
            all_positions_3.push(num+8-1)
        }
    }
    if(opposition_positions.indexOf(num+8+1)!= -1){
        if(num%8 != 0){//if my pawn not in the right wall
            all_positions_3.push(num+8+1)
        }
    }
    return all_positions_3
}
/////////////////////////////////////////////////
function is_this_position_safe(current_position,position,piece_name,colour_of_piece){//is my king safe in this move?
    let status= true
    let position_of_my_king=0
    let did_i_change_opposition_position_list= 'no'
    if(colour_of_piece=='white'){
        positions_of_white.splice(positions_of_white.indexOf(current_position),1)
        positions_of_white.push(position)
        if(positions_of_black.indexOf(position)!= -1){
            positions_of_black.splice(positions_of_black.indexOf(position),1)
            did_i_change_opposition_position_list='yes'
        }
        if(piece_name != 'king'){
            position_of_my_king=document.getElementById('wking').parentNode.id.substring(3)*1
        }else if(piece_name == 'king'){
            position_of_my_king= position
        }
        for(let x in positions_of_black){//can x in black, eat my king?
            let class_name=document.getElementById('box'+positions_of_black[x].toString()).childNodes[0].className
            if(class_name=='pawn'){
                if(black_pawn_positions(positions_of_black[x]).indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='rook'){
                if(positions_of_rook(positions_of_black[x],'black').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='horse'){
                if(positions_of_horse(positions_of_black[x],'black').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='bishop'){
                if(positions_of_bishop(positions_of_black[x],'black').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='queen'){
                if(positions_of_queen(positions_of_black[x],'black').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='king'){
                if(positions_of_king(positions_of_black[x],'black').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }
        }
        positions_of_white.push(current_position)
        positions_of_white.splice(positions_of_white.indexOf(position),1)
        if(did_i_change_opposition_position_list=='yes'){
            positions_of_black.push(position)
        }
    }else if(colour_of_piece=='black'){
        positions_of_black.splice(positions_of_black.indexOf(current_position),1)
        positions_of_black.push(position)
        if(positions_of_white.indexOf(position)!= -1){
            positions_of_white.splice(positions_of_white.indexOf(position),1)
            did_i_change_opposition_position_list='yes'
        }
        if(piece_name != 'king'){
            position_of_my_king=document.getElementById('bking').parentNode.id.substring(3)*1
        }else if(piece_name == 'king'){
            position_of_my_king= position
        }
        for(let x in positions_of_white){//can x in white, eat my king?
            let class_name=document.getElementById('box'+positions_of_white[x].toString()).childNodes[0].className
            if(class_name=='pawn'){
                if(white_pawn_positions(positions_of_white[x]).indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='rook'){
                if(positions_of_rook(positions_of_white[x],'white').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='horse'){
                if(positions_of_horse(positions_of_white[x],'white').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='bishop'){
                if(positions_of_bishop(positions_of_white[x],'white').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='queen'){
                if(positions_of_queen(positions_of_white[x],'white').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }else if(class_name=='king'){
                if(positions_of_king(positions_of_white[x],'white').indexOf(position_of_my_king)!= -1){
                    status= false
                    break
                }
            }
        }
        positions_of_black.push(current_position)
        positions_of_black.splice(positions_of_black.indexOf(position),1)
        if(did_i_change_opposition_position_list=='yes'){
            positions_of_white.push(position)
        }
    }
    return status
}
////////////////////////////////////////////////
function has_opposition_lost_the_game(colour){//colour will be the colour of the opposition
    let status= true
    let opposition_positions=[]
    if(colour=='white'){
        opposition_positions=[...positions_of_white]
    }else if(colour == 'black'){
        opposition_positions=[...positions_of_black]
    }
    for(let x in opposition_positions){
        let piece_name=document.getElementById('box'+ opposition_positions[x].toString()).childNodes[0].className
        let piece_position=opposition_positions[x]
        if(piece_name=='pawn'){
            let positions=[]
            if(colour=='white'){
                positions=white_pawn_positions(piece_position)
            }else if(colour == 'black'){
                positions=black_pawn_positions(piece_position)
            }
            positions=positions.filter(function(y){
                if(is_this_position_safe(piece_position,y,'pawn',colour)==true){
                    return true
                }
            })
            if((positions.length > 0 ) || (is_enpassant_possible_and_safe_for_this_pawn(piece_position,colour)==true)){
                status=false
                break
            }
        }else if(piece_name=='rook'){
            let positions=positions_of_rook(piece_position,colour)
            positions=positions.filter(function(y){
                if(is_this_position_safe(piece_position,y,'rook',colour)==true){
                    return true
                }
            })
            if(positions.length > 0){
                status= false
                break
            }
        }else if(piece_name=='horse'){
            let positions=positions_of_horse(piece_position,colour)
            positions=positions.filter(function(y){
                if(is_this_position_safe(piece_position,y,'horse',colour)==true){
                    return true
                }
            })
            if(positions.length > 0){
                status= false
                break
            }
        }else if(piece_name=='bishop'){
            let positions=positions_of_bishop(piece_position,colour)
            positions=positions.filter(function(y){
                if(is_this_position_safe(piece_position,y,'bishop',colour)==true){
                    return true
                }
            })
            if(positions.length > 0){
                status= false
                break
            }
        }else if(piece_name=='queen'){
            let positions=positions_of_queen(piece_position,colour)
            positions=positions.filter(function(y){
                if(is_this_position_safe(piece_position,y,'queen',colour)==true){
                    return true
                }
            })
            if(positions.length > 0){
                status= false
                break
            }
        }else if(piece_name=='king'){
            let positions=positions_of_king(piece_position,colour)
            positions=positions.filter(function(y){
                if(is_this_position_safe(piece_position,y,'king',colour)==true){
                    return true
                }
            })
            if(positions.length > 0){
                status= false
                break
            }
        }
    }
    return status
}
////////////////////////////////////////////////
function is_my_king_in_danger(colour){//colour is opposition's colour
    let status= false
    let position_of_king=0
    let opposition_positions=[]
    if(colour=='white'){
        opposition_positions=[...positions_of_white]
        position_of_king=document.getElementById('bking').parentNode.id.substring(3)*1
    }else if(colour=='black'){
        opposition_positions=[...positions_of_black]
        position_of_king=document.getElementById('wking').parentNode.id.substring(3)*1
    }
    for(let x in opposition_positions){
        let piece_name=document.getElementById('box'+ opposition_positions[x].toString()).childNodes[0].className
        let piece_position=opposition_positions[x]
        if(piece_name=='pawn'){
            let positions=[]
            if(colour=='white'){
                positions=white_pawn_positions(piece_position)
            }else if(colour=='black'){
                positions=black_pawn_positions(piece_position)
            }
            if(positions.indexOf(position_of_king)!= -1){
                status=true
                break
            }
        }else if(piece_name=='rook'){
            let positions=positions_of_rook(piece_position,colour)
            if(positions.indexOf(position_of_king)!= -1){
                status=true
                break
            }
        }else if(piece_name=='horse'){
            let positions=positions_of_horse(piece_position,colour)
            if(positions.indexOf(position_of_king)!= -1){
                status=true
                break
            }
        }else if(piece_name=='bishop'){
            let positions=positions_of_bishop(piece_position,colour)
            if(positions.indexOf(position_of_king)!= -1){
                status=true
                break
            }
        }else if(piece_name=='queen'){
            let positions=positions_of_queen(piece_position,colour)
            if(positions.indexOf(position_of_king)!= -1){
                status=true
                break
            }
        }else if(piece_name=='king'){
            let positions=positions_of_king(piece_position,colour)
            if(positions.indexOf(position_of_king)!= -1){
                status=true
                break
            }
        }
    }
    return status
}
////////////////////////////////////////////////
function wking_right_castling_status(){
    //if the boxes between king and rook are unoccupied and if king and rook are unmoved and king is not in danger in current postion and in the right 2 boxes the king will not be in danger
    if(positions_of_white.indexOf(62)== -1 && positions_of_white.indexOf(63)== -1 && positions_of_black.indexOf(62)== -1 && positions_of_black.indexOf(63)== -1){
        if(has_wking_or_64rook_moved== false && is_my_king_in_danger('black')== false && is_this_position_safe(61,62,'king','white')== true && is_this_position_safe(61,63,'king','white')==true ){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
////////////////////////////////////////////////
function wking_left_castling_status(){
    //if the boxes between king and rook are unoccupied and if king and rook are unmoved and king is not in danger in current postion and in the left 2 boxes the king will not be in danger
    if(positions_of_white.indexOf(60)== -1 && positions_of_white.indexOf(59)== -1 && positions_of_white.indexOf(58)== -1 && positions_of_black.indexOf(60)== -1 && positions_of_black.indexOf(59)== -1 && positions_of_black.indexOf(58)== -1){
        if(has_wking_or_57rook_moved== false && is_my_king_in_danger('black')== false && is_this_position_safe(61,60,'king','white')== true && is_this_position_safe(61,59,'king','white')==true ){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
////////////////////////////////////////////////
function bking_right_castling_status(){
    //if the boxes between king and rook are unoccupied and if king and rook are unmoved and king is not in danger in current postion and in the right 2 boxes the king will not be in danger
    if(positions_of_white.indexOf(6)== -1 && positions_of_white.indexOf(7)== -1 && positions_of_black.indexOf(6)== -1 && positions_of_black.indexOf(7)== -1){
        if(has_bking_or_8rook_moved== false && is_my_king_in_danger('white')== false && is_this_position_safe(5,6,'king','black')== true && is_this_position_safe(5,7,'king','black')==true ){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
////////////////////////////////////////////////
function bking_left_castling_status(){
    //if the boxes between king and rook are unoccupied and if king and rook are unmoved and king is not in danger in current postion and in the left 2 boxes the king will not be in danger
    if(positions_of_white.indexOf(4)== -1 && positions_of_white.indexOf(3)== -1 && positions_of_white.indexOf(2)== -1 && positions_of_black.indexOf(4)== -1 && positions_of_black.indexOf(3)== -1 && positions_of_black.indexOf(2)== -1){
        if(has_bking_or_1rook_moved== false && is_my_king_in_danger('white')== false && is_this_position_safe(5,4,'king','black')== true && is_this_position_safe(5,3,'king','black')==true ){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
////////////////////////////////////////////////
function is_enpassant_possible_and_safe_for_this_pawn(num,colour){
    let status=false
    let possible=false
    if(en_passant_food_pawn_box != 0){
        if(num%8 != 1 && num %8 != 0){//if pawn not in left or right wall
            if(num+1 == en_passant_food_pawn_box || num-1 == en_passant_food_pawn_box){
                possible=true
            }
        }else if(num % 8 == 1){//if pawn in the left wall
            if(num+1 == en_passant_food_pawn_box){
                possible=true
            }
        }else if(num % 8 == 0){//if pawn in the right wall
             if(num-1 == en_passant_food_pawn_box){
                possible=true
            }           
        }
    }
    if(possible==true){
        if(colour=='white'){
            positions_of_white.splice(positions_of_white.indexOf(num),1)
            positions_of_black.splice(positions_of_black.indexOf(en_passant_food_pawn_box),1)
            positions_of_white.push(en_passant_food_pawn_box- 8)
            if(is_my_king_in_danger('black')== false){
                status=true
            }
            positions_of_white.push(num)
            positions_of_black.push(en_passant_food_pawn_box)
            positions_of_white.splice(positions_of_white.indexOf(en_passant_food_pawn_box- 8),1)
        }else if(colour=='black'){
            positions_of_black.splice(positions_of_black.indexOf(num),1)
            positions_of_white.splice(positions_of_white.indexOf(en_passant_food_pawn_box),1)
            positions_of_black.push(en_passant_food_pawn_box+ 8)
            if(is_my_king_in_danger('white')== false){
                status=true
            }
            positions_of_black.push(num)
            positions_of_white.push(en_passant_food_pawn_box)
            positions_of_black.splice(positions_of_black.indexOf(en_passant_food_pawn_box+ 8),1)
        }
    }
    return status
}
////////////////////////////////////////////////
function create_blob(blob){
    //let blob = document.createElement('span')
    blob.className = 'blob'
    blob.style.width = '20px'
    blob.style.height = '20px'
    blob.style.backgroundColor = 'rgb(0,0,0,0.2)'
    blob.style.borderRadius = '50%'
    blob.style.display = 'block'
    blob.style.margin = '18px'
}
////////////////////////////////////////////////
/*pawn promotion variables*/
let w_queen_id_suffix=2
let w_rook_id_suffix=3
let w_bishop_id_suffix=3
let w_horse_id_suffix=3
/*---------------------------*/
let b_queen_id_suffix=2
let b_rook_id_suffix=3
let b_bishop_id_suffix=3
let b_horse_id_suffix=3
////////////////////////////////////////////////
/*castling variables*/
let has_wking_or_64rook_moved=false
let has_wking_or_57rook_moved=false
let has_bking_or_8rook_moved=false
let has_bking_or_1rook_moved=false
////////////////////////////////////////////////
let dead_box=0
let num=0
let positions=[]
let eat_positions=[]
let piece_to_be_appended=''
let positions_of_white=[49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]
let positions_of_black=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let turn=1
let is_a_king_in_trouble= false
let pawn_promotion_status=false
let castling_event_listener_boxes=[]
let en_passant_food_pawn_box=0
let en_passant_event_listener_box=0
function activate(e){
    num = e.currentTarget.id.substring(3)*1
    if (e.currentTarget.hasChildNodes() == true) {
        //trial code
        if((e.currentTarget.childNodes[0].className != 'blob' && e.currentTarget.style.backgroundColor != 'red' && castling_event_listener_boxes.indexOf(num)== -1)||(e.currentTarget.childNodes[0].className=='king' && e.currentTarget.style.backgroundColor=='red' && is_a_king_in_trouble==true)){
            for(let i=1;i<=64;i++){//check all the boxes and remove blobs and move functions
                if(document.getElementById('box'+i.toString()).hasChildNodes()== true ){
                    if(document.getElementById('box'+i.toString()).childNodes[0].className =='blob'){
                        document.getElementById('box'+i.toString()).childNodes[0].remove()
                        document.getElementById('box'+i.toString()).removeEventListener('click',move)
                    }
                }
                if(document.getElementById('box'+i.toString()).style.backgroundColor=='red' && i!= en_passant_event_listener_box){
                    if(document.getElementById('box'+i.toString()).childNodes[0].className=='king' && document.getElementById('box'+i.toString()).style.backgroundColor=='red' && is_a_king_in_trouble==true){
                    }else{
                        document.getElementById('box'+i.toString()).removeEventListener('click',eat)
                        if(document.getElementById('box'+i.toString()).className=='white_box'){
                            document.getElementById('box'+i.toString()).style.backgroundColor='rgb(247,247,215)'
                        }else if(document.getElementById('box'+i.toString()).className=='green_box'){
                            document.getElementById('box'+i.toString()).style.backgroundColor='rgb(125,169,86)'
                        }
                    }
                }
            }
            if(piece_to_be_appended.length > 0){
                document.getElementById(piece_to_be_appended).parentNode.addEventListener('click', activate)
                piece_to_be_appended=''
                dead_box=0
            }
            if(castling_event_listener_boxes.length>0){
                castling_event_listener_boxes.forEach(function(x){
                    document.getElementById('box'+x.toString()).removeEventListener('click',castling)
                })
                castling_event_listener_boxes=[]
            }
            if(en_passant_event_listener_box != 0){
                document.getElementById('box'+en_passant_event_listener_box.toString()).removeEventListener('click',en_passant)
                if(document.getElementById('box'+en_passant_event_listener_box.toString()).className=='white_box'){
                    document.getElementById('box'+en_passant_event_listener_box.toString()).style.backgroundColor='rgb(247,247,215)'
                }else if(document.getElementById('box'+en_passant_event_listener_box.toString()).className=='green_box'){
                    document.getElementById('box'+en_passant_event_listener_box.toString()).style.backgroundColor='rgb(125,169,86)'
                }
                en_passant_event_listener_box=0
            }
        }   
        //end of trial code
        if(((e.currentTarget.childNodes[0].id.substring(0,1)=='w' && turn%2 != 0)||(e.currentTarget.childNodes[0].id.substring(0,1)=='b' && turn%2 == 0)) && pawn_promotion_status==false && castling_event_listener_boxes.indexOf(num)== -1){
            eat_positions=[]
            let colour_of_piece= e.currentTarget.childNodes[0].id.substring(0,1)
            if(colour_of_piece=='w'){
                colour_of_piece='white'
            }else if(colour_of_piece=='b'){
                colour_of_piece='black'
            }/////////////////////////////////////
            if(e.currentTarget.childNodes[0].className=='pawn'){
                if(colour_of_piece=='white'){
                    positions=white_pawn_positions(num)
                }else if(colour_of_piece=='black'){
                    positions=black_pawn_positions(num)
                }
                let opposition_positions=[]
                if(colour_of_piece=='white'){
                    opposition_positions=positions_of_black
                }else if(colour_of_piece=='black'){
                    opposition_positions=positions_of_white
                }
                //king stuff code
                positions=positions.filter(function(x){
                    if(is_this_position_safe(num,x,'pawn',colour_of_piece)== true){
                        return true
                    }
                })
                //
                positions=positions.filter(function(x){
                    if(opposition_positions.indexOf(x)== -1){
                        return true
                    }else{
                        eat_positions.push(x)  
                    }
                })
                //en passant code
                if(is_enpassant_possible_and_safe_for_this_pawn(num,colour_of_piece)==true){
                    if(colour_of_piece=='white'){
                        en_passant_event_listener_box=en_passant_food_pawn_box-8
                    }else if(colour_of_piece=='black'){
                        en_passant_event_listener_box=en_passant_food_pawn_box+8
                    }
                    document.getElementById('box'+ en_passant_event_listener_box.toString()).style.backgroundColor='red'
                    document.getElementById('box'+ en_passant_event_listener_box.toString()).addEventListener('click',en_passant)    
                }
                //////////////////////////
            }else if(e.currentTarget.childNodes[0].className=='rook' ){
                positions=positions_of_rook(num,colour_of_piece)
                let opposition_positions=[]
                if(colour_of_piece=='white'){
                    opposition_positions=positions_of_black
                }else if(colour_of_piece=='black'){
                    opposition_positions=positions_of_white
                }
                //king stuff code
                positions=positions.filter(function(x){
                    if(is_this_position_safe(num,x,'rook',colour_of_piece)== true){
                        return true
                    }
                })
                //
                positions=positions.filter(function(x){
                    if(opposition_positions.indexOf(x)== -1){
                        return true
                    }else{
                        eat_positions.push(x)  
                    }
                })
            }else if(e.currentTarget.childNodes[0].className=='horse'){
                positions=positions_of_horse(num,colour_of_piece)
                let opposition_positions=[]
                if(colour_of_piece=='white'){
                    opposition_positions=positions_of_black
                }else if(colour_of_piece=='black'){
                    opposition_positions=positions_of_white
                }
                //king stuff code
                positions=positions.filter(function(x){
                    if(is_this_position_safe(num,x,'horse',colour_of_piece)== true){
                        return true
                    }
                })
                //
                positions=positions.filter(function(x){
                    if(opposition_positions.indexOf(x)== -1){
                        return true
                    }else{
                        eat_positions.push(x)  
                    }
                })
            }else if(e.currentTarget.childNodes[0].className=='bishop'){
                positions=positions_of_bishop(num,colour_of_piece)
                let opposition_positions=[]
                if(colour_of_piece=='white'){
                    opposition_positions=positions_of_black
                }else if(colour_of_piece=='black'){
                    opposition_positions=positions_of_white
                }
                //king stuff code
                positions=positions.filter(function(x){
                    if(is_this_position_safe(num,x,'bishop',colour_of_piece)== true){
                        return true
                    }
                })
                //                
                positions=positions.filter(function(x){
                    if(opposition_positions.indexOf(x)== -1){
                        return true
                    }else{
                        eat_positions.push(x)  
                    }
                })
            }else if(e.currentTarget.childNodes[0].className=='queen'){
                positions=positions_of_queen(num,colour_of_piece)
                let opposition_positions=[]
                if(colour_of_piece=='white'){
                    opposition_positions=positions_of_black
                }else if(colour_of_piece=='black'){
                    opposition_positions=positions_of_white
                }
                //king stuff code
                positions=positions.filter(function(x){
                    if(is_this_position_safe(num,x,'queen',colour_of_piece)== true){
                        return true
                    }
                })
                //
                positions=positions.filter(function(x){
                    if(opposition_positions.indexOf(x)== -1){
                        return true
                    }else{
                        eat_positions.push(x)  
                    }
                })
            }else if(e.currentTarget.childNodes[0].className=='king'){
                positions=positions_of_king(num,colour_of_piece)
                let opposition_positions=[]
                if(colour_of_piece=='white'){
                    opposition_positions=positions_of_black
                }else if(colour_of_piece=='black'){
                    opposition_positions=positions_of_white
                }
                //king stuff code
                positions=positions.filter(function(x){
                    if(is_this_position_safe(num,x,'king',colour_of_piece)== true){
                        return true
                    }
                })
                //
                positions=positions.filter(function(x){
                    if(opposition_positions.indexOf(x)== -1){
                        return true
                    }else{
                        eat_positions.push(x)  
                    }
                })
                /*-------checking and adding castling eventlisteners------------*/
                if(colour_of_piece=='white'){
                    if(wking_right_castling_status()==true){
                        castling_event_listener_boxes.push(64)
                    }
                    if(wking_left_castling_status()==true){
                        castling_event_listener_boxes.push(57)
                    }
                }else if(colour_of_piece=='black'){
                    if(bking_right_castling_status()==true){
                        castling_event_listener_boxes.push(8)
                    }
                    if(bking_left_castling_status()==true){
                        castling_event_listener_boxes.push(1)
                    }
                }
                castling_event_listener_boxes.forEach(function(x){
                    document.getElementById('box'+ x.toString()).addEventListener('click',castling)
                })
                /////////////////////////////////////////////////////////////////
            }//////////////////////////////////////////////////////////////
            e.currentTarget.removeEventListener('click', activate)
            dead_box= num
            for(let x in positions){
                let blob = document.createElement('span')
                create_blob(blob)
                document.getElementById('box' + positions[x].toString()).appendChild(blob)
                document.getElementById('box' + positions[x].toString()).addEventListener('click', move)
            }
            for(let x in eat_positions){
                //change the boxes' colours to red and addEventListener.('click',eat) to every box
                document.getElementById('box' + eat_positions[x].toString()).style.backgroundColor='red'
                document.getElementById('box' + eat_positions[x].toString()).addEventListener('click',eat)
            }
            piece_to_be_appended= e.currentTarget.childNodes[0].id.slice()
        }
    }else if(e.currentTarget.hasChildNodes() == false && num != en_passant_event_listener_box){
        if(dead_box != 0){
            document.getElementById('box' + dead_box.toString()).addEventListener('click',activate)
            dead_box = 0
            for(let i=1;i<=64;i++){//check all the boxes and remove blobs and move functions
                if(document.getElementById('box'+i.toString()).hasChildNodes()== true ){
                    if(document.getElementById('box'+i.toString()).childNodes[0].className =='blob'){
                        document.getElementById('box'+i.toString()).childNodes[0].remove()
                        document.getElementById('box'+i.toString()).removeEventListener('click',move)
                    }
                }
                if(document.getElementById('box'+i.toString()).style.backgroundColor=='red' && i != en_passant_event_listener_box){
                    if((document.getElementById('box'+i.toString()).childNodes[0].className=='king' && document.getElementById('box'+i.toString()).style.backgroundColor=='red' && is_a_king_in_trouble==true)||(i == en_passant_event_listener_box)){
                    }else{
                        document.getElementById('box'+i.toString()).removeEventListener('click',eat)
                        if(document.getElementById('box'+i.toString()).className=='white_box'){
                            document.getElementById('box'+i.toString()).style.backgroundColor='rgb(247,247,215)'
                        }else if(document.getElementById('box'+i.toString()).className=='green_box'){
                            document.getElementById('box'+i.toString()).style.backgroundColor='rgb(125,169,86)'
                        }
                    }
                }
            }
            if(castling_event_listener_boxes.length>0){
                castling_event_listener_boxes.forEach(function(x){
                    document.getElementById('box'+x.toString()).removeEventListener('click',castling)
                })
                castling_event_listener_boxes=[]
            }
            if(en_passant_event_listener_box != 0){
                document.getElementById('box'+en_passant_event_listener_box.toString()).removeEventListener('click',en_passant)
                if(document.getElementById('box'+en_passant_event_listener_box.toString()).className=='white_box'){
                    document.getElementById('box'+en_passant_event_listener_box.toString()).style.backgroundColor='rgb(247,247,215)'
                }else if(document.getElementById('box'+en_passant_event_listener_box.toString()).className=='green_box'){
                    document.getElementById('box'+en_passant_event_listener_box.toString()).style.backgroundColor='rgb(125,169,86)'
                }
                en_passant_event_listener_box=0 
            }
        }
    }
}
/////////////////////////////////////
for(let i=1;i<=64;i++){
    document.getElementById('box'+i.toString()).addEventListener('click',activate)
}
document.getElementById('white_pawn_promotion').childNodes.forEach(function(x){
    x.addEventListener('click',w_pawn_promotion)
})
document.getElementById('black_pawn_promotion').childNodes.forEach(function(x){
    x.addEventListener('click',b_pawn_promotion)
})
function move(e){
    if(en_passant_food_pawn_box != 0){
        en_passant_food_pawn_box=0
    }
    //en passant
    if(piece_to_be_appended.substring(0,5)=='wpawn' && document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1 > 48 && document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1 < 57 && e.currentTarget.id.substring(3)*1 > 32 && e.currentTarget.id.substring(3)*1 < 41){
        en_passant_food_pawn_box=e.currentTarget.id.substring(3)*1
    }else if(piece_to_be_appended.substring(0,5)=='bpawn' && document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1 > 8 && document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1 < 17 && e.currentTarget.id.substring(3)*1 > 24 && e.currentTarget.id.substring(3)*1 < 33){
        en_passant_food_pawn_box=e.currentTarget.id.substring(3)*1
    }
    //////////////////////////////////////////////////////////////////////
    //checking whether the king or rooks move and setting castling variables to true if they do
    if(has_wking_or_64rook_moved==false && (piece_to_be_appended=='wking'||piece_to_be_appended=='wrook2')){
        has_wking_or_64rook_moved=true
    }
    if(has_wking_or_57rook_moved==false && (piece_to_be_appended=='wking'||piece_to_be_appended=='wrook1')){
        has_wking_or_57rook_moved=true
    }
    if(has_bking_or_8rook_moved==false && (piece_to_be_appended=='bking'||piece_to_be_appended=='brook2')){
        has_bking_or_8rook_moved=true
    }
    if(has_bking_or_1rook_moved==false && (piece_to_be_appended=='bking'||piece_to_be_appended=='brook1')){
        has_bking_or_1rook_moved=true
    }
    /////////////////////////////////////////////////////////
    //wiping off the 'red' behind a king which was in trouble
    if(is_a_king_in_trouble==true){
        is_a_king_in_trouble=false
        if(document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.className=='white_box'){
            document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.className=='green_box'){
            document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.style.backgroundColor='rgb(125,169,86)'
        }
    }
    //////////////////////////////////////////////////////////
    positions.forEach(function(x){
        document.getElementById('box'+x.toString()).childNodes[0].remove()//we get rid of all the blobs
        document.getElementById('box'+x.toString()).removeEventListener('click',move)//we get rid of all the moves
    })
    eat_positions.forEach(function(x){
        if(document.getElementById('box'+x.toString()).className=='white_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById('box'+x.toString()).className=='green_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(125,169,86)'
        }
        document.getElementById('box'+x.toString()).removeEventListener('click',eat)
    })
    if(castling_event_listener_boxes.length>0){
        castling_event_listener_boxes.forEach(function(x){
            document.getElementById('box'+x.toString()).removeEventListener('click',castling)
        })
        castling_event_listener_boxes=[]
    }
    document.getElementById(piece_to_be_appended).parentNode.addEventListener('click', activate)
    dead_box=0
    //number of the piece_to_be_appended's parentNode 'box'
    let num_of_box = document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1
    //
    if(piece_to_be_appended.substring(0,1)=='w'){
        let index= positions_of_white.indexOf(num_of_box)//index of 'num_of_box' in positions_of_white
        positions_of_white.splice(index,1)
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        let index= positions_of_black.indexOf(num_of_box)//index of 'num_of_box' in positions_of_black
        positions_of_black.splice(index,1)
    }
    //before this--splice
    let child = document.getElementById(piece_to_be_appended)
    e.currentTarget.appendChild(child)
    //after this--push
    if(piece_to_be_appended.substring(0,1)=='w'){
        positions_of_white.push(e.currentTarget.id.substring(3)*1)
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        positions_of_black.push(e.currentTarget.id.substring(3)*1)
    }
    //checking whether the opposition's king is in danger or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(is_my_king_in_danger('white')==true){
            document.getElementById('bking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(is_my_king_in_danger('black')==true){
            document.getElementById('wking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    //checking whether the opposition has lost the game or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(has_opposition_lost_the_game('black')== true && is_my_king_in_danger('white')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='White won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(has_opposition_lost_the_game('white')== true && is_my_king_in_danger('black')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='Black won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    if(document.getElementById(piece_to_be_appended).className=='pawn' && e.currentTarget.id.substring(3)*1 < 9){
        document.getElementById('white_pawn_promotion').style.display='block'
        pawn_promotion_status=true
    }else if(document.getElementById(piece_to_be_appended).className=='pawn' && e.currentTarget.id.substring(3)*1 > 56){
        document.getElementById('black_pawn_promotion').style.display='block'
        pawn_promotion_status=true
    }
    //////////////////////////////////////////////////////////////////////////////////
    piece_to_be_appended=''
    turn++
}
function eat(e){
    //en-passant
    if(en_passant_food_pawn_box != 0){
        en_passant_food_pawn_box=0
    }
    //////
    //checking whether the king or rooks move and setting castling variables to true if they do
    if(has_wking_or_64rook_moved==false && (piece_to_be_appended=='wking'||piece_to_be_appended=='wrook2')){
        has_wking_or_64rook_moved=true
    }
    if(has_wking_or_57rook_moved==false && (piece_to_be_appended=='wking'||piece_to_be_appended=='wrook1')){
        has_wking_or_57rook_moved=true
    }
    if(has_bking_or_8rook_moved==false && (piece_to_be_appended=='bking'||piece_to_be_appended=='brook2')){
        has_bking_or_8rook_moved=true
    }
    if(has_bking_or_1rook_moved==false && (piece_to_be_appended=='bking'||piece_to_be_appended=='brook1')){
        has_bking_or_1rook_moved=true
    }
    /////////////////////////////////////////////////////////
    //wiping off the 'red' behind a king which was in trouble
    if(is_a_king_in_trouble==true){
        is_a_king_in_trouble=false
        if(document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.className=='white_box'){
            document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.className=='green_box'){
            document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.style.backgroundColor='rgb(125,169,86)'
        }
    }
    //////////////////////////////////////////////////////////
    //re-awakening the dead box
    //document.getElementById(piece_to_be_appended).parentNode.addEventListener('click', activate)
    document.getElementById('box'+ dead_box.toString()).addEventListener('click',activate)
    dead_box=0
    /////////////////////////////////////////////////////////////////////////////////////////////
    //get rid of the 'move and eat' event listeners, and get rid of the red colour and blobs
    eat_positions.forEach(function(x){
        if(document.getElementById('box'+x.toString()).className=='white_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById('box'+x.toString()).className=='green_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(125,169,86)'
        }
        document.getElementById('box'+x.toString()).removeEventListener('click',eat)
    })
    positions.forEach(function(x){
        document.getElementById('box'+x.toString()).childNodes[0].remove()//we get rid of all the blobs
        document.getElementById('box'+x.toString()).removeEventListener('click',move)//we get rid of all the moves
    })
    if(castling_event_listener_boxes.length>0){
        castling_event_listener_boxes.forEach(function(x){
            document.getElementById('box'+x.toString()).removeEventListener('click',castling)
        })
        castling_event_listener_boxes=[]
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //remove the position of the piece eaten from positions_of_black/positions_of_white
    let num_of_box = e.currentTarget.id.substring(3)*1//piece eaten's box's number
    if(e.currentTarget.childNodes[0].id.substring(0,1)=='w'){
        let index= positions_of_white.indexOf(num_of_box)//index of 'num_of_box' in positions_of_white
        positions_of_white.splice(index,1)
    }else if(e.currentTarget.childNodes[0].id.substring(0,1)=='b'){
        let index= positions_of_black.indexOf(num_of_box)//index of 'num_of_box' in positions_of_white
        positions_of_black.splice(index,1)
    }
    e.currentTarget.childNodes[0].remove()//we remove the piece eaten
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //append the eater to the currentTarget box and splice it's previous position and push it's current position
    let num_of_box_2 = document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1//box number of eater
    if(piece_to_be_appended.substring(0,1)=='w'){
        let index_2= positions_of_white.indexOf(num_of_box_2)//index of 'num_of_box' in positions_of_white
        positions_of_white.splice(index_2,1)
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        let index_2= positions_of_black.indexOf(num_of_box_2)//index of 'num_of_box' in positions_of_black
        positions_of_black.splice(index_2,1)
    }
    //before this--splice
    let child = document.getElementById(piece_to_be_appended)
    e.currentTarget.appendChild(child)
    //after this--push
    if(piece_to_be_appended.substring(0,1)=='w'){
        positions_of_white.push(e.currentTarget.id.substring(3)*1)
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        positions_of_black.push(e.currentTarget.id.substring(3)*1)
    }
    //checking whether the opposition's king is in danger or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(is_my_king_in_danger('white')==true){
            document.getElementById('bking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(is_my_king_in_danger('black')==true){
            document.getElementById('wking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    //checking whether the opposition has lost the game or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(has_opposition_lost_the_game('black')== true && is_my_king_in_danger('white')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='White won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(has_opposition_lost_the_game('white')== true && is_my_king_in_danger('black')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='Black won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    if(document.getElementById(piece_to_be_appended).className=='pawn' && e.currentTarget.id.substring(3)*1 < 9){
        document.getElementById('white_pawn_promotion').style.display='block'
        pawn_promotion_status=true
    }else if(document.getElementById(piece_to_be_appended).className=='pawn' && e.currentTarget.id.substring(3)*1 > 56){
        document.getElementById('black_pawn_promotion').style.display='block'
        pawn_promotion_status=true
    }
    //////////////////////////////////////////////////////////////////////////////////
    piece_to_be_appended=''
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    turn++
}
/////////////////////////////////////
function w_pawn_promotion(e){
    pawn_promotion_status= false
    let pawn_id=''
    for(let i=1;i < 9;i++){
        if(document.getElementById('box'+i.toString()).hasChildNodes()==true){
            if(document.getElementById('box'+i.toString()).childNodes[0].className=='pawn'){
                pawn_id= document.getElementById('box'+i.toString()).childNodes[0].id
            }
        }
    }
    if(e.currentTarget.className =='queen'){
        document.getElementById(pawn_id).src='white_queen.png'
        document.getElementById(pawn_id).className='queen'
        document.getElementById(pawn_id).id='wqueen' + w_queen_id_suffix.toString() 
        w_queen_id_suffix++
    }else if(e.currentTarget.className =='rook'){
        document.getElementById(pawn_id).src='white_rook.png'
        document.getElementById(pawn_id).className='rook'
        document.getElementById(pawn_id).id='wrook' + w_rook_id_suffix.toString() 
        w_rook_id_suffix++
    }else if(e.currentTarget.className =='horse'){
        document.getElementById(pawn_id).src='white_horse.png'
        document.getElementById(pawn_id).className='horse'
        document.getElementById(pawn_id).id='whorse' + w_horse_id_suffix.toString() 
        w_horse_id_suffix++
    }else if(e.currentTarget.className =='bishop'){
        document.getElementById(pawn_id).src='white_bishop.png'
        document.getElementById(pawn_id).className='bishop'
        document.getElementById(pawn_id).id='wbishop' + w_bishop_id_suffix.toString() 
        w_bishop_id_suffix++
    }
    document.getElementById('white_pawn_promotion').style.display='none'
    //checking if black's king is in danger or not
    if(is_my_king_in_danger('white')==true){
        document.getElementById('bking').parentNode.style.backgroundColor='red'
        is_a_king_in_trouble=true
    }
    //checking if black has lost the game or not
    if(has_opposition_lost_the_game('black')== true  && is_my_king_in_danger('white')==true){
        let end_game_message = document.createElement('h1')
        end_game_message.innerHTML='White won the game!'
        document.getElementsByTagName('body')[0].appendChild(end_game_message)
    }
}
function b_pawn_promotion(e){
    pawn_promotion_status= false
    let pawn_id=''
    for(let i=57;i < 65;i++){
        if(document.getElementById('box'+i.toString()).hasChildNodes()==true){
            if(document.getElementById('box'+i.toString()).childNodes[0].className=='pawn'){
                pawn_id= document.getElementById('box'+i.toString()).childNodes[0].id
            }
        }
    }
    if(e.currentTarget.className =='queen'){
        document.getElementById(pawn_id).src='black_queen.png'
        document.getElementById(pawn_id).className='queen'
        document.getElementById(pawn_id).id='bqueen' + b_queen_id_suffix.toString() 
        b_queen_id_suffix++
    }else if(e.currentTarget.className =='rook'){
        document.getElementById(pawn_id).src='black_rook.png'
        document.getElementById(pawn_id).className='rook'
        document.getElementById(pawn_id).id='brook' + w_rook_id_suffix.toString() 
        b_rook_id_suffix++
    }else if(e.currentTarget.className =='horse'){
        document.getElementById(pawn_id).src='black_horse.png'
        document.getElementById(pawn_id).className='horse'
        document.getElementById(pawn_id).id='bhorse' + w_horse_id_suffix.toString() 
        b_horse_id_suffix++
    }else if(e.currentTarget.className =='bishop'){
        document.getElementById(pawn_id).src='black_bishop.png'
        document.getElementById(pawn_id).className='bishop'
        document.getElementById(pawn_id).id='bbishop' + w_bishop_id_suffix.toString() 
        b_bishop_id_suffix++
    }
    document.getElementById('black_pawn_promotion').style.display='none'
    //checking if white's king is in danger or not
    if(is_my_king_in_danger('black')==true){
        document.getElementById('wking').parentNode.style.backgroundColor='red'
        is_a_king_in_trouble=true
    }
    //checking if white has lost the game or not
    if(has_opposition_lost_the_game('white')== true  && is_my_king_in_danger('black')==true){
        let end_game_message = document.createElement('h1')
        end_game_message.innerHTML='Black won the game!'
        document.getElementsByTagName('body')[0].appendChild(end_game_message)
    }
}
//////////////////////////////////////
function castling(e){
    //enpassant
    if(en_passant_food_pawn_box != 0){
        en_passant_food_pawn_box=0
    }
    //////////////////////////////////
    positions.forEach(function(x){
        document.getElementById('box'+x,toString()).childNodes[0].remove()//we get rid of all the blobs
        document.getElementById('box'+x.toString()).removeEventListener('click',move)//we get rid of all the moves
    })
    eat_positions.forEach(function(x){
        if(document.getElementById('box'+x.toString()).className=='white_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById('box'+x.toString()).className=='green_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(125,169,86)'
        }
        document.getElementById('box'+x.toString()).removeEventListener('click',eat)
    })
    document.getElementById(piece_to_be_appended).parentNode.addEventListener('click', activate)
    dead_box=0
    castling_event_listener_boxes.forEach(function(x){
        document.getElementById('box'+x.toString()).removeEventListener('click',castling)
    })
    castling_event_listener_boxes=[]
    ////////////////////////////////////////////////////////////////////////////////////////////////
    if(e.currentTarget.id.substring(3)*1== 64){//wiping,appending and maneuvering pieces --done
        let child_1= document.getElementById('wking')
        let child_2=document.getElementById('wrook2')
        document.getElementById('box63').appendChild(child_1)
        document.getElementById('box62').appendChild(child_2)
        positions_of_white.splice(positions_of_white.indexOf(61),1)
        positions_of_white.splice(positions_of_white.indexOf(64),1)
        positions_of_white.push(63,62)
        has_wking_or_64rook_moved=true
    }else if(e.currentTarget.id.substring(3)*1== 57){//wiping,appending and maneuvering pieces --done
        let child_1= document.getElementById('wking')
        let child_2=document.getElementById('wrook1')
        document.getElementById('box59').appendChild(child_1)
        document.getElementById('box60').appendChild(child_2)
        positions_of_white.splice(positions_of_white.indexOf(61),1)
        positions_of_white.splice(positions_of_white.indexOf(57),1)
        positions_of_white.push(59,60)
        has_wking_or_57rook_moved=true
    }else if(e.currentTarget.id.substring(3)*1== 8){//wiping,appending and maneuvering pieces --done
        let child_1= document.getElementById('bking')
        let child_2=document.getElementById('brook2')
        document.getElementById('box7').appendChild(child_1)
        document.getElementById('box6').appendChild(child_2)
        positions_of_black.splice(positions_of_black.indexOf(5),1)
        positions_of_black.splice(positions_of_black.indexOf(8),1)
        positions_of_black.push(7,6)
        has_bking_or_8rook_moved=true
    }else if(e.currentTarget.id.substring(3)*1== 1){//wiping,appending and maneuvering pieces --done
        let child_1= document.getElementById('bking')
        let child_2=document.getElementById('brook1')
        document.getElementById('box3').appendChild(child_1)
        document.getElementById('box4').appendChild(child_2)
        positions_of_black.splice(positions_of_black.indexOf(5),1)
        positions_of_black.splice(positions_of_black.indexOf(1),1)
        positions_of_black.push(3,4)
        has_bking_or_1rook_moved=true
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //checking whether the opposition's king is in danger or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(is_my_king_in_danger('white')==true){
            document.getElementById('bking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(is_my_king_in_danger('black')==true){
            document.getElementById('wking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    //checking whether the opposition has lost the game or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(has_opposition_lost_the_game('black')== true && is_my_king_in_danger('white')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='White won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(has_opposition_lost_the_game('white')== true && is_my_king_in_danger('black')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='Black won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    piece_to_be_appended=''
    turn++
}
//////////////////////////////////////
function en_passant(e){
    //wiping off the 'red' behind a king which was in trouble
    if(is_a_king_in_trouble==true){
        is_a_king_in_trouble=false
        if(document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.className=='white_box'){
            document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.className=='green_box'){
            document.getElementById(piece_to_be_appended.substring(0,1)+'king').parentNode.style.backgroundColor='rgb(125,169,86)'
        }
    }
    //////////////////////////////////////////////////////////
    positions.forEach(function(x){
        document.getElementById('box'+x.toString()).childNodes[0].remove()//we get rid of all the blobs
        document.getElementById('box'+x.toString()).removeEventListener('click',move)//we get rid of all the moves
    })
    eat_positions.forEach(function(x){
        if(document.getElementById('box'+x.toString()).className=='white_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(247,247,215)'
        }else if(document.getElementById('box'+x.toString()).className=='green_box'){
            document.getElementById('box'+x.toString()).style.backgroundColor='rgb(125,169,86)'
        }
        document.getElementById('box'+x.toString()).removeEventListener('click',eat)
    })
    if(castling_event_listener_boxes.length>0){
        castling_event_listener_boxes.forEach(function(x){
            document.getElementById('box'+x.toString()).removeEventListener('click',castling)
        })
        castling_event_listener_boxes=[]
    }
    document.getElementById(piece_to_be_appended).parentNode.addEventListener('click', activate)
    dead_box=0
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    if(piece_to_be_appended.substring(0,1)=='w'){
        positions_of_white.splice(positions_of_white.indexOf(document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1),1)
        positions_of_black.splice(positions_of_black.indexOf(en_passant_food_pawn_box),1)
        positions_of_white.push(e.currentTarget.id.substring(3)*1)
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        positions_of_black.splice(positions_of_black.indexOf(document.getElementById(piece_to_be_appended).parentNode.id.substring(3)*1),1)
        positions_of_white.splice(positions_of_white.indexOf(en_passant_food_pawn_box),1)
        positions_of_black.push(e.currentTarget.id.substring(3)*1)
    }
    let child=document.getElementById(piece_to_be_appended)
    document.getElementById('box'+ en_passant_food_pawn_box.toString()).childNodes[0].remove()
    e.currentTarget.appendChild(child)
    en_passant_food_pawn_box=0
    e.currentTarget.removeEventListener('click',en_passant)
    if(e.currentTarget.className=='white_box'){
        e.currentTarget.style.backgroundColor='rgb(247,247,215)'
    }else if(e.currentTarget.className=='green_box'){
        e.currentTarget.style.backgroundColor='rgb(125,169,86)'
    }
    en_passant_event_listener_box=0
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    //checking whether the opposition's king is in danger or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(is_my_king_in_danger('white')==true){
            document.getElementById('bking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(is_my_king_in_danger('black')==true){
            document.getElementById('wking').parentNode.style.backgroundColor='red'
            is_a_king_in_trouble=true
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    //checking whether the opposition has lost the game or not
    if(piece_to_be_appended.substring(0,1)=='w'){
        if(has_opposition_lost_the_game('black')== true && is_my_king_in_danger('white')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='White won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }else if(piece_to_be_appended.substring(0,1)=='b'){
        if(has_opposition_lost_the_game('white')== true && is_my_king_in_danger('black')==true){
            let end_game_message = document.createElement('h1')
            end_game_message.innerHTML='Black won the game!'
            document.getElementsByTagName('body')[0].appendChild(end_game_message)
        }
    }
    //////////////////////////////////////////////////////////////////////////////////
    piece_to_be_appended=''
    turn++
}