import os
import numpy as np

def calculate_statistics(numbers):
    """Calculate basic statistics for a list of numbers."""
    avg = np.mean(numbers)
    median = np.median(numbers)
    std_dev = np.std(numbers)
    min_num = np.min(numbers)
    max_num = np.max(numbers)
    return avg, median, std_dev, min_num, max_num


def process_file(file_path):
    """Process a single file to calculate and save statistics."""
    with open(file_path, 'r') as file:
        numbers = [float(line.strip()) for line in file if line.strip().isdigit()]
    
    if numbers:
        avg, median, std_dev, min_num, max_num = calculate_statistics(numbers)
        summary_file = file_path.replace('.txt', '-summary.txt')
        
        with open(summary_file, 'w') as summary:
            summary.write(f"Average: {avg}\n")
            summary.write(f"Median: {median}\n")
            summary.write(f"Standard Deviation: {std_dev}\n")
            summary.write(f"Minimum: {min_num}\n")
            summary.write(f"Maximum: {max_num}\n")


def process_directory(directory):
    """Recursively process all txt files in the given directory."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.txt'):
                file_path = os.path.join(root, file)
                process_file(file_path)


process_directory('./results')
