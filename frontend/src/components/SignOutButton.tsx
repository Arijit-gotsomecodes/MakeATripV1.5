import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => { 
    const QueryClient = useQueryClient();
    const {showToast} = useAppContext()

    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await QueryClient.invalidateQueries("validateToken")
            showToast({message: "Signed out!", type: "SUCCESS"})
        },
        onError: (error: Error) => {
            showToast({message: error.message, type: "ERROR"})
        }
    })

    const handleClick = () => {
        mutation.mutate()
    }

    return (
        <button onClick={handleClick} className="text-blue-600 bg-amber-100 px-3 font-bold hover:bg-gray-100 rounded-md">
            Sign out
        </button>
    )
}

export default SignOutButton;