# Mental_Disorder_Classification
This script analyzes a dataset of mental disorders using various machine learning models to classify diagnoses. It preprocesses the data, evaluates multiple classification models, and visualizes the results.

---

## How to Use

1. **Dataset:**
   - Place the dataset at the specified path: `/Users/Augusto/Desktop/MentalDisorderClassification/Dataset-Mental-Disorders.csv`.
   - The dataset should contain columns for symptoms, diagnoses, and additional categorical or numerical values.

2. **Dependencies:**
   - Install the required Python libraries:
     ```bash
     pip install pandas numpy scikit-learn matplotlib seaborn
     ```

3. **Run the Script:**
   - Execute the script in your Python environment to process the data, train models, and generate visualizations.

---

## Code Explanation

### 1. **Loading and Cleaning Data**
   - The dataset is loaded using `pandas`.
   - Column names and specific column values (e.g., "Suicidal thoughts") are stripped of unnecessary spaces.
   - Categorical columns (e.g., "Sadness", "Optimism") are mapped to numerical values using predefined mappings.

### 2. **Feature and Target Separation**
   - Features (`X`) are separated from the target variable (`y`), which is the `Expert Diagnose` column.
   - The target column is mapped to numerical values representing different diagnoses:
     - `0`: Normal
     - `1`: Bipolar Type-1
     - `2`: Bipolar Type-2
     - `3`: Depression

### 3. **Model Evaluation**
   - The `evaluate_models` function evaluates the following models using 5-fold cross-validation:
     - Logistic Regression
     - Support Vector Classifier (SVC)
     - K-Nearest Neighbors (KNN)
     - Naive Bayes
     - Perceptron
     - Stochastic Gradient Descent (SGD)
     - Decision Tree
     - Random Forest
   - Each model's accuracy is calculated and stored:
     - Mean accuracy is displayed in a summary table.
     - Fold-wise details are saved in a CSV file (`model_details.csv`).

### 4. **Visualization**

#### a. **Model Comparison**
   - A bar chart compares the mean accuracy of all models.
   - The chart is saved as `model_comparison.png`.

#### b. **Sadness Levels by Diagnosis and Suicidal Thoughts**
   - A grid of histograms visualizes the distribution of sadness levels for each diagnosis and suicidal thought status.
   - This plot is saved as `sadness_levels_comparison.png`.

---

## Outputs

1. **Files:**
   - `model_scores.csv`: Summary of mean accuracy for each model.
   - `model_details.csv`: Fold-wise accuracy details for each model.
   - `model_comparison.png`: Bar chart comparing model performance.
   - `sadness_levels_comparison.png`: Histogram grid for sadness levels.

2. **Console Outputs:**
   - Displays the summary table "Model Comparison with Scores" showing the mean accuracy of each model.

---

## Example Output

### Model Comparison Table
```
       Model              Mean Accuracy
0  Random Forest           89.17
1  SVC                     88.33
2  Logistic Regression     85.00
...
```

### Visualizations
1. **Model Performance Comparison**: A bar chart showing the accuracy of each model.
2. **Sadness Levels Grid**: A grid of histograms showing the distribution of sadness levels.

---

## Notes
- Ensure the dataset matches the format expected by the script.
- Customize file paths as needed for your environment.
- Modify the mappings or add new models if necessary.

