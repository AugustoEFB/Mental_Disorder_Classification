# My C++ Project

This project is a simple C++ application that demonstrates the use of utility functions. It is structured to separate the main application logic from utility functions, promoting modularity and reusability.

## Project Structure

```
my-cpp-project
├── src
│   ├── main.cpp       # Entry point of the application
│   └── utils.cpp      # Implementation of utility functions
├── include
│   └── utils.h        # Header file for utility functions
├── CMakeLists.txt     # CMake configuration file
└── README.md          # Project documentation
```

## Building the Project

To build the project, you need to have CMake installed. Follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-cpp-project
   ```

2. Create a build directory:
   ```
   mkdir build
   cd build
   ```

3. Run CMake to configure the project:
   ```
   cmake ..
   ```

4. Build the project:
   ```
   make
   ```

## Running the Application

After building the project, you can run the application using the following command:

```
./my-cpp-project
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.