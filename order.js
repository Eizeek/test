alert('To make an order please add your order like this:  Restaurant/Menu')
alert('Restaurants: Mcdonals ; KFC ; BurgerKing')
alert('Menu: Fries/3 ; Burger/10 ; Milkshake/7')

let userOrder = prompt('Please add your order down below : ')

let adress = prompt('Please add you adress for delivery')

switch (userOrder) {
    case 'Mcdonalds/Fries/3':
        case 'Mcdonalds/Burger/10':
            case 'Mcdonalds/Milkshake/7':
                confirm('Confirm your order?')
                alert('Your order confirmed')

        break;

        case 'KFC/Fries/3':
            case 'KFC/Burger/10':
                case 'KFC/Milkshake/7':
                    confirm('Confirm your order?')
                    alert('Your order confirmed')
            break;

            case 'BurgerKing/Fries/3':
                case 'BurgerKing/Burger/10':
                    case 'BurgerKing/Milkshake/7':
                        confirm('Confirm your order?')
                        alert('Your order confirmed')
                break;


    default:
        alert('Sorry, you have to choose from the order list')
        break;
}

alert('Your order: ' + userOrder + ' will be delivered to '+ adress +' soon')
