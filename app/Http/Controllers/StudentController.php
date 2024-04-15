<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Request;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Student::query();
        $students = $query->paginate(12)->onEachSide(2);
        return inertia('Student/Index', [
           'students' => StudentResource::collection($students),
           'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Student/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $image = $request->file('image') ?? null;
        if ($image) {
            $image_name = time(). '.'. $image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $image_name);
            $request->merge(['image_path' => '/'.'images/'.$image_name]);
        }
        $student = Student::create($request->all());
        return redirect()->route('student.index')->with('success', 'Student created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return inertia('Student/Show', [
           'student' => new StudentResource($student),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        return inertia('Student/Edit', [
           'student' => new StudentResource($student),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {

        $image = $request->file('image') ?? null;
        if ($image) {
            $image_name = time(). '.'. $image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $image_name);
            $request->merge(['image_path' => '/'.'images/'.$image_name]);
        }
        $student->update($request->all());
        return redirect()->route('student.index')->with('success', 'Student updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $image_path = $student->image_path;
        $student->delete();
        $dpath = public_path(). '/'. $student->image_path;
        if ( $image_path && file_exists($dpath)) {
            unlink($dpath);
        }
        return redirect()->route('student.index')->with('success', 'Student deleted successfully.');
    }
}
