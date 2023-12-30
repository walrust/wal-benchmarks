import os
import numpy as np
import matplotlib.pyplot as plt

def average(file_path):
    """Process a single file to calculate and save statistics."""
    with open(file_path, 'r') as file:
        numbers = [float(line.strip()) for line in file if line.strip().replace('.', '', 1).isdigit()]
    
    if numbers:
        return np.mean(numbers)
    else:
        raise Exception('No numbers found in ' + file_path)

def generate_diagrams(directory):
    """Recursively process all txt files and create diagrams."""
    for root, dirs, files in os.walk(directory):
        file_names = []
        averages = []
        for file in files:
            if file.endswith('.txt'):
                file_path = os.path.join(root, file)
                try:
                    avg = average(file_path)
                    file_names.append(file)
                    averages.append(avg)
                except Exception as e:
                    print(e)

    if file_names and averages:
        plt.figure(figsize=(10, 5))
        plt.bar(file_names, averages, color='blue')
        plt.xlabel('Files')
        plt.ylabel('Average Value')
        plt.title('Bar Chart for Directory: ' + os.path.basename(root))
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.savefig(os.path.join(root, os.path.basename(root) + '_diagram.png'))
        plt.close()

generate_diagrams('./results')
