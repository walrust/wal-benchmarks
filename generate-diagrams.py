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
    
def diagram_title(file_path):
    switch = {
        'changing-route': 'Zmiana adresu url',
        'for-adding-to-the-end': 'Dodawanie elementu na koniec intrukcji iteracyjnej',
        'for-adding-to-the-front': 'Dodawanie elementu na początek intrukcji iteracyjnej',
        'replacing-whole-100-components-deep-subtree': 'Zamiana całego poddrzewa VDOM o głębokości 100',
        'sending-callback-through-100-components-up': 'Przesyłanie callbacku przez 100 komponentów w górę drzewa VDOM',
        'sending-props-100-components-down': 'Przesyłanie Properties przez 100 komponentów w dół drzewa VDOM',
        'updating-100-children': 'Uaktualnienie 100 komponentów dzieci',
        'updating-attributes-of-100-children': 'Uaktualnienie atrybutów 100 komponentów dzieci',
        'updating-self-and-sending-the-same-props-to-100-children': 'Uaktualnienie komponentu i przesłanie tych samych Properties do 100 komponentów dzieci',
    }
    return switch.get(os.path.basename(file_path), 'Default')

def generate_diagrams(directory):
    """Recursively process all txt files and create diagrams."""
    for root, dirs, files in os.walk(directory):
        tools = []
        averages = []
        for file in files:
            if file.endswith('.txt'):
                file_path = os.path.join(root, file)
                try:
                    avg = average(file_path)
                    tools.append(file.replace('.txt', ''))
                    averages.append(avg)
                except Exception as e:
                    print(e)

        if tools and averages:
            plt.figure(figsize=(10, 5))
            bars = plt.bar(tools, averages, color='blue')
            plt.xlabel('Narzędzie')
            plt.ylabel('Średni czas wykonania w mikrosekundach')
            plt.title(diagram_title(root))
            plt.xticks(rotation=45)
            plt.bar_label(bars, labels=[f'{round(val)}' for val in averages])
            plt.tight_layout()
            diagram_file_name = os.path.basename(root).replace('txt', 'png')
            diagram_file_path = './diagrams'
            plt.savefig(os.path.join(diagram_file_path, diagram_file_name))
            plt.close()

generate_diagrams('./results')
