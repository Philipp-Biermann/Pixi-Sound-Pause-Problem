const inputElem = document.getElementById( 'inputElem' );
inputElem?.addEventListener( 'change', uploadFileInput.bind( this ) );

document.getElementById( 'btn_play' )?.addEventListener( 'click', playSound.bind( this ) );
document.getElementById( 'btn_pause' )?.addEventListener( 'click', pauseSound.bind( this ) );
document.getElementById( 'btn_stop' )?.addEventListener( 'click', stopSound.bind( this ) );


const fileTestName: string = "Testname";

function uploadFileInput( event: Event ): void
{
    if ( ( event.target as HTMLInputElement ).files )
    {
        const fileList: FileList | null = ( event.target as HTMLInputElement ).files;

        if ( fileList && fileList.length > 0 )
        {
            const file: File = fileList[0];
            const reader: FileReader = new FileReader();

            reader.addEventListener( 'load', () =>
            {
                const fileResult: string | ArrayBuffer | null = reader.result;

                //@ts-ignore
                PIXI.sound.add( fileTestName, {
                    url: fileResult as string,
                    preload: true,
                    loaded: () =>
                    {
                        console.log( "Loaded" );
                    }
                } );
            } );

            if ( file )
            {
                reader.readAsDataURL( file );
            }
        }
    }
};

function playSound(): void
{
    //@ts-ignore
    if ( PIXI.sound.find( fileTestName ).paused )
    {
        console.log( "Resuming" );
        //@ts-ignore
        PIXI.sound.resume( fileTestName );
    }
    else
    {
        console.log( "Playing" );
        //@ts-ignore
        PIXI.sound.play( fileTestName );
    }
}

function pauseSound(): void
{
    console.log( "Pausing" );
    //@ts-ignore
    PIXI.sound.pause( fileTestName );
}

function stopSound(): void
{
    console.log( "Stopping" );
    //@ts-ignore
    PIXI.sound.stopAll();
}