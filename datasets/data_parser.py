import pandas as pd

states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Washington DC', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

if __name__ == "__main__":

    filename = "Monthly Crude Oil Production by State 1981 - Nov 2016.xlsx"
    out = "output.txt" 

    res = {}
    df = pd.read_excel(filename)

    # store data into dict
    for i in list(df):
        # show the list of values
        for j in states:
            if(j in i):
                try: 
                    col_vals = df[i].tolist()
                    col_vals = [float(i) for i in col_vals]
                    res[j] = sum(col_vals)
                except Exception as e:
                    print(f"Couldn't Sum {e}")

    sum = 0
    for i in res.keys():
        sum += res[i]

    new_dict = {}
    other = 0
    for i in res.keys():
        if(res[i] < sum / 32):
            other += res[i]
        else:
            new_dict[i] = res[i]

    new_dict['other'] = other

    with open(out, 'w') as f:
        for i in new_dict.keys():
            f.write("{ name: \"" + str(i) + "\" , value: " + str(new_dict[i]) + " }, \n")
