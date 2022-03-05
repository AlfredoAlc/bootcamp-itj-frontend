import { useEffect, useState, useCallback } from "react";


export const usePosts = () => {

	const [allPosts, setAllPosts] = useState([])

	useEffect(() => {
		getPosts()
	}, [])

	const getPosts = useCallback(async () => {
		try {
			const responseJson = await fetch(`http://localhost:4000/posts`)
			const res = await responseJson.json()
			setAllPosts(res)
		} catch(err){
			console.error(err)
		}
	}, [])

	return allPosts
}