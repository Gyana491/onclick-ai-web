import { NextRequest, NextResponse } from 'next/server';
import { QueryService } from '../../../api/services';
import { QueryRequest } from '../../../api/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, attachment, searchEnabled } = body as QueryRequest;
    
    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }
    
    // Check if client accepts streaming
    const acceptsStream = req.headers.get('accept') === 'text/event-stream';
    
    const queryService = new QueryService();
    
    if (acceptsStream) {
      // Process as a stream
      const { stream, sources } = await queryService.processQueryStream({
        query,
        attachment,
        searchEnabled: searchEnabled ?? false,
      });
      
      // Return the stream with sources in the headers
      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'X-Sources': sources ? JSON.stringify(sources) : '',
        },
      });
    } else {
      // Process normally for clients that don't support streaming
      const response = await queryService.processQuery({
        query,
        attachment,
        searchEnabled: searchEnabled ?? false,
      });
      
      return NextResponse.json(response);
    }
  } catch (error) {
    console.error('Error processing query:', error);
    return NextResponse.json(
      { error: 'Failed to process query' },
      { status: 500 }
    );
  }
} 