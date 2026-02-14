from flask import Flask, render_template, request, jsonify
from datetime import datetime
import os

app = Flask(__name__)

# Ensure responses file exists
RESPONSES_FILE = 'responses.txt'

@app.route('/')
def landing():
    """Landing page with animated entrance"""
    return render_template('landing.html')

@app.route('/proposal')
def proposal():
    """Main proposal page with Yes/No buttons"""
    return render_template('proposal.html')

@app.route('/celebration')
def celebration():
    """Celebration page shown when she clicks Yes"""
    return render_template('celebration.html')

@app.route('/save-response', methods=['POST'])
def save_response():
    """Save Anika's response with timestamp"""
    try:
        data = request.get_json()
        response = data.get('response', 'Unknown')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Save to file
        with open(RESPONSES_FILE, 'a') as f:
            f.write(f"{timestamp} - Anika's response: {response}\n")
        
        return jsonify({'status': 'success', 'message': 'Response saved!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

# Made with Bob
