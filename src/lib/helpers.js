import { format } from 'date-fns'
import React, { useEffect, useState } from 'react';
export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl (publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`
}

export function buildImageObj (source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}



export function SvgInline (props) {
    const [svg, setSvg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
        fetch(props.url)
            .then(res => res.text())
            .then(setSvg)
            .catch(setIsErrored)
            .then(() => setIsLoaded(true))
    }, [props.url]);
    console.log(props.url)
    return (
        <div
            className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isErrored ? 'svgInline--errored' : ''}`}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}