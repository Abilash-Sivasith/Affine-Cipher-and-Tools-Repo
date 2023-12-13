def find_gcd(a,b):
    '''find the gcd of a and b '''
    if a == 0 :
        return b
    elif b == 0:
        return a
    else:
        gcd = find_gcd(b % a , a)
        return gcd
    
def linear_combinations(a,b, visualizer = False):
    '''finds the linear combination '''
    if a == 0 :
        return  0 , 1
    elif b  == 0 :
        return 1 , 0
    else:
        x_lots_of_b , x_lots_of_a = linear_combinations(b % a ,a)
        if visualizer is True:
            gcd = find_gcd(a,b)
            print(f'{gcd} = ({a} * {x_lots_of_a - (b // a) * x_lots_of_b}) + ({b} * {x_lots_of_b})')
        return (x_lots_of_a - (b // a) * x_lots_of_b ), x_lots_of_b
    