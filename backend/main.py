from fastapi import FastAPI

app = FastAPI(title='KATARA Community Report API')

@app.get('/')
def root():
    return {
        'project': 'KATARA Community Report',
        'status': 'active',
        'mission': 'Community-centered climate resilience infrastructure'
    }

@app.get('/health')
def health_check():
    return {'status': 'healthy'}
