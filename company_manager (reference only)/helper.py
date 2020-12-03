def query_to_dict_clean(query_dict):
    """
    converts query dict to a dictionary,
    converts string to numbers if possible.
    removes keys with no values.
    :param query_dict:
    :return:
    """
    data = query_dict.dict()
    data_copy = data.copy()
    for key, val in data.items():
        if not val:
            data_copy.pop(key)
        try:
            v = float(val)
            data_copy[key] = v
        except ValueError:
            continue
    return data_copy
