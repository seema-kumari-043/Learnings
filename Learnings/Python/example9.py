price = 1000000
has_good_credit = True


if has_good_credit:
    down_pay = (.10*price)
else:
    down_pay = (.20*price)

print(f"Down payment: ${down_pay}")