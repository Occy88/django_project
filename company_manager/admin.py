from django.contrib import admin

# Register your models here.
projects = []
p_len = len(projects)
students = []
s_len = len(students)
combination=[]
combinations = []


def combine(student_i, projects_i):
    # return if the there are not enough students to allocate to remaining projects
    if student_i < projects_i:
        return
    if student_i > len(students) or projects_i > (len(projects)):
        return
        # cycle through all students in list (from index)
    student_list_to_append = []

    for i in range(student_i, s_len):
        combinations.append((students[i], projects[projects_i],i))
        combine(student_i + 1, projects_i + 1)


