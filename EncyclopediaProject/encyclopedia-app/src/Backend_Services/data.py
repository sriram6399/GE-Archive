import pandas as pd
from collections import OrderedDict
import json


  
work_dict = {}

def extract_json(file):
    df = pd.DataFrame(pd.read_excel(file))
    print(df)
    for i in range(len(df['Name'])):
        if str(df['Work'][i]) not in work_dict.keys():
            work_dict[str(df['Work'][i])]= {"places":[],"characters":[],"misc":[]}

        

        if df['Name'][i] == df['Place'][i]:
            if df["Description"][i] == "":
                work_dict[str(df['Work'][i])]["places"].append({"name":df['Name'][i],"desc":"Desc not available"})
            else:
                work_dict[str(df['Work'][i])]["places"].append({"name":df['Name'][i],"desc":df['Description'][i]})

        if df['Name'][i] == df['Character'][i]:
            if df["Description"][i] == "":
                work_dict[str(df['Work'][i])]["characters"].append({"name":df['Name'][i],"desc":"Desc not available"})
            else:
                work_dict[str(df['Work'][i])]["characters"].append({"name":df['Name'][i],"desc":df['Description'][i]})

        if df['Name'][i] == df['Miscellaneous'][i]:
            if df["Description"][i] == "":
                work_dict[str(df['Work'][i])]["misc"].append({"name":df['Name'][i],"desc":"Desc not available"})
            else:
                work_dict[str(df['Work'][i])]["misc"].append({"name":df['Name'][i],"desc":df['Description'][i]})

    sorted_work = OrderedDict(sorted(work_dict.items()))
    print(sorted_work.keys())
    lst =[]
    for key in sorted_work.keys():
        temp = {}
        val = sorted_work[key]
        temp["work_name"] = key
        temp["places"] = val["places"]
        temp["characters"] = val["characters"]
        temp["misc"] = val["misc"]
        lst.append(temp)

    json_string = json.dumps(lst)
    with open("src\Backend_Services\Encyclo.json", "w") as i :
        json.dump(json_string,i)

def read_json(filename):
    with open(filename) as user_file:
        file_contents = user_file.read()

    parsed_json = json.loads(file_contents)
    return parsed_json
    
extract_json("src\Backend_Services\Ency.xlsx")